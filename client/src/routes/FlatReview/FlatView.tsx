import classes from "./FlatReview.module.scss";
import { FlatInterface } from "../../components/Flats/flats";
import { IoShareSocialSharp } from "react-icons/io5";
import { BiHeart } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { MdVerifiedUser } from "react-icons/md";
import { GrRotateRight } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";
import BreadCrumbs from "../../components/BreadCrums/BreadCrums";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DefaultSlide from "../../components/Slider/defaultSlide/defaultSlide";

import Schedule from "../../components/Schedule/schedule";
interface PropsInterface {
  location: {
    state: {
      flat: FlatInterface;
    };
    pathname: string;
  };
}

function FlatView(props: PropsInterface) {
  const flat = props.location.state.flat;
  const [date, setDate] = useState<any>(new Date());
  const [current, setCurrent] = useState<number>(0);
  const [toggleCalendar, setCalendar] = useState<boolean>(false);
  const [openSchedule, setSchedule] = useState<boolean>(false);
  let yesterday = new Date(new Date().setDate(new Date().getDate() - 1));
  console.log(flat, "flat");
  const disabledDates = [
    new Date("March 29, 2021"),
    new Date("March 30, 2021"),
    new Date("April 12, 2021"),
  ];

  const onChange = (date: any) => {
    setDate(date);
  };

  const schedule = () => {
    if (!openSchedule) {
      setSchedule(true);
    } else {
      setSchedule(false);
    }
  };
  const switchCalendar = () => {
    if (!toggleCalendar) {
      setCalendar(true);
    } else {
      setCalendar(false);
    }
  };
  const element1 = [
    flat.images[0],
    flat.images[1],
    flat.images[2],
    flat.images[3],
    flat.images[4],
  ];
  let ultimateArray = [];
  ultimateArray.push(element1);

  let arrayAfterLoad = flat.images.slice(5);
  var i,
    j,
    temparray,
    chunk = 8;

  for (i = 0, j = arrayAfterLoad.length; i < j; i += chunk) {
    temparray = arrayAfterLoad.slice(i, i + chunk);

    if (temparray.length < 8) {
      let leftSpace = 8 - temparray.length;
      for (i = 0; i < leftSpace; i++) {
        temparray.push("/no-photo.png");
      }
    }
    const testArray = [];
    testArray.push(temparray);

    ultimateArray = [...ultimateArray, ...testArray];
  }

  const length = ultimateArray.length;

  const nextSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const prevSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  if (!Array.isArray(ultimateArray) || ultimateArray.length <= 0) {
    return null;
  }

  return (
    <div className={classes.FlatReview}>
      <div className={classes.FlatBox}>
        <div className={classes.ImagesBox}>
          <div className={classes.arrowRight}>
            <MdKeyboardArrowRight
              size="8em"
              color="white"
              onClick={prevSlide}
            />
          </div>
          <div className={classes.arrowLeft}>
            <MdKeyboardArrowRight
              size="8em"
              color="white"
              onClick={nextSlide}
            />
          </div>
          {ultimateArray.map((item, index) => {
            if (index === 0) {
              return (
                <div
                  className={
                    index === current
                      ? `${classes.slide} ${classes.active}`
                      : classes.slide
                  }
                >
                  {index === current && (
                    <div key={index} className={classes.Images}>
                      <DefaultSlide images={flat.images} />
                    </div>
                  )}
                </div>
              );
            } else {
              return (
                <div
                  className={
                    index === current
                      ? `${classes.slide} ${classes.active}`
                      : classes.slide
                  }
                >
                  <div className={classes.Images2}>
                    {index === current &&
                      item.map((photo: string, index: string) => {
                        return (
                          <div key={index} className={classes.imgBox}>
                            <img src={photo} alt="Flat" />
                          </div>
                        );
                      })}
                  </div>
                </div>
              );
            }
          })}
          <div className={classes.totalNumber}>
            <span>44 photos</span>
            <span>3 virtual tours</span>
            <span>1 video</span>
          </div>
        </div>
        <div className={classes.contentBox}>
          <div className={classes.content}>
            <div className={classes.breadCrumbsPanel}>
              <BreadCrumbs pathname={props.location.pathname} />
              <div className={classes.publishedAt}>
                <GrRotateRight size="2.5em" color="#4886ff" />
                <span>Today</span>
              </div>
            </div>
            <div className={classes.upperDiv}>
              <h1>{flat.title}</h1>
              <div className={classes.icons}>
                <IoShareSocialSharp size="3.5em" color="#4886ff" />
                <BiHeart size="3.5em" color="#4886ff" />
              </div>
            </div>
            <div className={classes.address}>
              <h2>{flat.address}</h2>
            </div>
            <div className={classes.rating}>
              <div className={classes.starRating}>
                <BsStarFill size="2em" color="#4886ff" />
                <BsStarFill size="2em" color="#4886ff" />
                <BsStarFill size="2em" color="#4886ff" />
                <BsStarFill size="2em" color="#4886ff" />
                <BsStarFill size="2em" color="#4886ff" />
                <span>5.0 (10 Reviews)</span>
              </div>
              <div className={classes.isVerified}>
                <MdVerifiedUser size="2em" color="#4886ff" />
                <span>Verified Listing</span>
              </div>
            </div>
            <div className={classes.Specifications}>
              <div>
                <h2>Daily Rent</h2>
                <p>{flat.price}€</p>
              </div>
              <div>
                <h2>Hourly Rent</h2>
                <p>{flat.price}€</p>
              </div>
              <div>
                <h2>Bedrooms</h2>
                <p>
                  {flat.type} - {flat.beds} bd
                </p>
              </div>
              <div>
                <h2>Square Feet</h2>
                <p>50 sq ft</p>
              </div>
            </div>
          </div>
          <div className={classes.calendar}>
            <button onClick={() => switchCalendar()}>Switch Calendar</button>
            {toggleCalendar ? (
              <div>
                <h2>Daily Calendar</h2>
                <Calendar
                  onChange={onChange}
                  value={date}
                  selectRange={true}
                  tileDisabled={({ date }) =>
                    date < yesterday ||
                    flat.occupiedTime.some(
                      (time) =>
                        date.getFullYear() === time.getFullYear() &&
                        date.getMonth() === time.getMonth() &&
                        date.getDate() === time.getDate()
                    )
                    ||
                    flat.occupiedByHour.some(
                      (hour: any) =>
                        date.getFullYear() === hour.getFullYear() &&
                        date.getMonth() === hour.getMonth() &&
                        date.getDate() === hour.getDate()
                    )
                  }
                />
              </div>
            ) : (
              <div>
                <h2>Hourly calendar</h2>
                <Calendar
                  onChange={onChange}
                  value={date}
                  tileDisabled={({ date }) =>
                    date < yesterday ||
                    flat.occupiedTime.some(
                      (time) =>
                        date.getFullYear() === time.getFullYear() &&
                        date.getMonth() === time.getMonth() &&
                        date.getDate() === time.getDate()
                    )
                  }
                />
              </div>
            )}

            <button onClick={() => schedule()}>Check Availability</button>
          </div>
        </div>
        <div className={classes.Schedule}>
          {openSchedule ? (
            <Schedule
              date={toggleCalendar ? date[0] : date}
              endDate={date[1]}
              occupiedTime={flat.occupiedTime}
              occupiedTimeByHour={flat.occupiedByHour}
              calendarSwitcher={toggleCalendar}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default FlatView;
