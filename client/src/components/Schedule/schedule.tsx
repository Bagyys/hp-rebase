import classes from "./schedule.module.scss";
import moment from "moment";
import { BsFillHouseDoorFill } from "react-icons/bs";
import React from "react";
interface scheduleInterface {
  date: number;
  endDate: number;
  occupiedTime: Array<string>;
  calendarSwitcher: boolean;
}

function Schedule({
  date,
  endDate,
  occupiedTime,
  calendarSwitcher,
}: scheduleInterface) {
  const todaysDate = moment(date).format("dddd MMM Do");
  const lastDay = moment(endDate).format("dddd MMM Do");
  console.log(lastDay, "kokia last day");
  const newDateObject = new Date(date);
  const stringifiedDate = newDateObject.toString();
  const getDatesBetweenDates = (startDate: any, endDate: any) => {
    let dates: any = [];
    //to avoid modifying the original date
    const theDate = new Date(startDate);
    while (theDate < endDate) {
      dates = [...dates, new Date(theDate)];
      theDate.setDate(theDate.getDate() + 1);
    }
    return dates;
  };
  const daysBetween = getDatesBetweenDates(date, endDate);
  daysBetween.shift();
  const testFunction = (hour: any) => {
    alert(todaysDate + hour);
  };
  // console.log(occupiedTime, "Occupied Time");
  // console.log(stringifiedDate, "Fixed Time Time");
  return (
    <div className={classes.Schedule}>
      {calendarSwitcher ? (
        <div className={classes.tableContent}>
          <div className={classes.TimeColumn}>
            <div className={classes.Days} style={{ visibility: "hidden" }}>
              Monday
            </div>
            <div>12 AM</div>
            <div>1 AM</div>
            <div>2 AM</div>
            <div>3 AM</div>
            <div>4 AM</div>
            <div>5 AM</div>
            <div>6 AM</div>
            <div>7 AM</div>
            <div>8 AM</div>
            <div>9 AM</div>
            <div>10 AM</div>
            <div>11 AM</div>
            <div>12 PM</div>
            <div>1 PM</div>
            <div>2 PM</div>
            <div>3 PM</div>
            <div>4 PM</div>
            <div>5 PM</div>
            <div>6 PM</div>
            <div>7 PM</div>
            <div>8 PM</div>
            <div>9 PM</div>
            <div>10 PM</div>
            <div>11 PM</div>
          </div>

          <div className={classes.Column}>
            <div className={classes.Days}>{todaysDate}</div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
          </div>

          <div className={classes.Column}>
            <div className={classes.Days}>
              {lastDay !== "Invalid date" ? lastDay : "Last day not selected"}
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
            <div>
              <BsFillHouseDoorFill size="2em" color="#4886ff" />
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.HourlyTable}>
          <h2 className={classes.HourlyTitle}>
            This is hourly schedule for {todaysDate}
          </h2>
          <div className={classes.tableContent}>
            <div className={classes.TimeColumn}>
              <div>12 AM</div>
              <div>1 AM</div>
              <div>2 AM</div>
              <div>3 AM</div>
              <div>4 AM</div>
              <div>5 AM</div>
              <div>6 AM</div>
              <div>7 AM</div>
              <div>8 AM</div>
              <div>9 AM</div>
              <div>10 AM</div>
              <div>11 AM</div>
              <div>12 PM</div>
              <div>1 PM</div>
              <div>2 PM</div>
              <div>3 PM</div>
              <div>4 PM</div>
              <div>5 PM</div>
              <div>6 PM</div>
              <div>7 PM</div>
              <div>8 PM</div>
              <div>9 PM</div>
              <div>10 PM</div>
              <div>11 PM</div>
            </div>

            <div className={classes.Column}>
              <div onClick={() => testFunction("12AM")}>
                {occupiedTime.map((time) => {
                  // console.log(time.toString(), " koks laikas mape");
                  // console.log(stringifiedDate, " Stringified time");
                  if (stringifiedDate === time) {
                    return <BsFillHouseDoorFill size="2em" color="red" />;
                  } else {
                    return (
                      <span>
                        <BsFillHouseDoorFill size="2em" color="#4886ff" />
                        <span className={classes.tooltipText}>
                          Apartment is available on this time
                        </span>
                      </span>
                    );
                  }
                })}
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
              <div>
                <BsFillHouseDoorFill size="2em" color="#4886ff" />
                <span className={classes.tooltipText}>
                  Apartment is available on this time
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Schedule;
