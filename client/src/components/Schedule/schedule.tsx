import classes from "./schedule.module.scss";
import moment from "moment";
import { BsFillHouseDoorFill } from "react-icons/bs";
import React from "react";
interface scheduleInterface {
  date: number;
  endDate: number;
  occupiedTime: Array<Date>;
  calendarSwitcher: boolean;
  occupiedTimeByHour: any;
}

function Schedule({
  date,
  endDate,
  occupiedTime,
  calendarSwitcher,
  occupiedTimeByHour,
}: scheduleInterface) {
  const todaysDate = moment(date).format("dddd MMM Do");
  const lastDay = moment(endDate).format("dddd MMM Do");

  const startOFF = new Date(date);
  let i;
  let occupationArray = [];
  let freeHours = [];
  for (i = 0; i < 24; i++) {
    const tableTime = new Date(startOFF.setHours(i));
    const isOccupiedOrNot = occupiedTimeByHour.some(
      (hours: any) => tableTime.getTime() === hours.getTime()
    );
    occupationArray.push(isOccupiedOrNot);
    if (!isOccupiedOrNot) {
      freeHours.push(tableTime);
    }
  }
  console.log(freeHours, "FREE HOURS");
  const tableHours = [
    "12AM",
    "1AM",
    "2AM",
    "3AM",
    "4AM",
    "5AM",
    "6AM",
    "7AM",
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
    "10PM",
    "11PM",
  ];
  console.log(occupationArray, " pries return");
  return (
    <div className={classes.Schedule}>
      {calendarSwitcher ? (
        <div className={classes.DailyTable}>
          <h2>From</h2>
          <div className={classes.Column}>
            <div className={classes.Days}>{todaysDate}</div>
          </div>
          <h2>Until</h2>
          <div className={classes.Column}>
            <div className={classes.Days}>{lastDay}</div>
          </div>
        </div>
      ) : (
        <div className={classes.HourlyTable}>
          <h2 className={classes.HourlyTitle}>
            This is hourly schedule for {todaysDate}
          </h2>
          <div className={classes.tableContent}>
            <div className={classes.TimeColumn}>
              {tableHours.map((hour) => {
                return <div>{hour}</div>;
              })}
            </div>

            <div className={classes.Column}>
              {occupationArray.map((item) => {
                if (item) {
                  return (
                    <div>
                      <span>
                        <BsFillHouseDoorFill size="2em" color="red" />
                        <span className={classes.tooltipText}>
                          Apartment is not available on this time
                        </span>
                      </span>
                    </div>
                  );
                } else {
                  return (
                    <div>
                      <span>
                        <BsFillHouseDoorFill size="2em" color="4886ff" />
                        <span className={classes.tooltipText}>
                          Apartment is available on this time
                        </span>
                      </span>
                    </div>
                  );
                }
              })}
            </div>
            <div className={classes.orderBox}>
              <h2>Order available time</h2>
              <ul>
                {freeHours.map((time) => {
                  return <li>{time.toString()}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Schedule;
