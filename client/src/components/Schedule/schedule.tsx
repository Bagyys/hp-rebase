import classes from "./schedule.module.scss";
import moment from "moment";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { useState } from "react";
import { bookHours, removeHours } from "../../store/actions/bookingActions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

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
  const booking = useSelector((state: any) => state.booking);
  const dispatch = useDispatch();
  const todaysDate = moment(date).format("dddd MMM Do");
  const lastDay = moment(endDate).format("dddd MMM Do");
  const [removalArray, setRemovalArray] = useState<Array<Date>>([]);
  const startOFF = new Date(date);
  let i;
  let occupationArray = [];
  for (i = 0; i < 24; i++) {
    const tableTime = new Date(startOFF.setHours(i, 0, 0));
    const isOccupiedOrNot = occupiedTimeByHour.some(
      (hours: any) => tableTime.getTime() === hours.getTime()
    );
    const timeObject = {
      isOccupiedOrNot,
      tableTime,
    };

    occupationArray.push(timeObject);
  }
  let bookingHoursInState = booking.hoursForBooking;
  useEffect(() => {
    setRemovalArray(bookingHoursInState);
  }, [bookingHoursInState]);
  bookingHoursInState.sort(function (a: any, b: any) {
    var dateA: any = new Date(a);
    var dateB: any = new Date(b);
    return dateA - dateB;
  });
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
  const addToList = (hour: Date) => {
    dispatch(bookHours(hour));
  };
  const deleteHour = (hour: Date) => {
    const index = removalArray.indexOf(hour);
    if (index > -1) {
      removalArray.splice(index, 1);
    }
    dispatch(removeHours(removalArray));
  };
  console.log(removalArray, " Kokia ARRAY");
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
              {tableHours.map((hour, index) => {
                return <div key={index}>{hour}</div>;
              })}
            </div>

            <div className={classes.Column}>
              {occupationArray.map((item, index) => {
                if (item.isOccupiedOrNot) {
                  return (
                    <div key={index}>
                      <span>
                        <BsFillHouseDoorFill size="2em" color="red" />
                        <span className={classes.tooltipText}>
                          Apartment is not available on this time
                        </span>
                      </span>
                    </div>
                  );
                } else {
                  let isAlreadyTaken = bookingHoursInState.some(
                    (timeTaken: Date) =>
                      item.tableTime.getTime() === timeTaken.getTime()
                  );
                  return (
                    <div className={isAlreadyTaken ? classes.disabled : ""}>
                      <span>
                        <BsFillHouseDoorFill
                          size="2em"
                          color="4886ff"
                          onClick={() => addToList(item.tableTime)}
                          style={{ cursor: "pointer" }}
                        />
                        <span className={classes.tooltipText}>
                          Apartment is available on this time
                        </span>
                      </span>
                    </div>
                  );
                }
              })}
            </div>
            <div className={classes.bookingHours}>
              <h2>Selected hours for booking :</h2>
              <ul>
                <h2>{todaysDate}</h2>
                {bookingHoursInState.map((hour: Date, index: string) => {
                  return (
                    <li key={index}>
                      {moment(hour).format("LT")}
                      <button onClick={() => deleteHour(hour)}>X</button>
                    </li>
                  );
                })}
              </ul>
              <button>Book Hours</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Schedule;
