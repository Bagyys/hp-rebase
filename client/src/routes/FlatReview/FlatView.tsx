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
// import Calendar from "@lls/react-light-calendar";
// import "@lls/react-light-calendar/dist/index.css";
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
  const [current, setCurrent] = useState(0);

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

  ultimateArray.map((item) => {});
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
  console.log(current);
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
                    <div className={classes.Images}>
                      <div className={classes.MainImage}>
                        {item[0] === undefined ? (
                          <img src="/no-photo.png" />
                        ) : (
                          <img src={item[0]} alt="Flat-other" />
                        )}
                      </div>
                      <div className={classes.OtherImages}>
                        <div className={classes.firstColumn}>
                          {item[1] === undefined ? (
                            <img src="/no-photo.png" />
                          ) : (
                            <img src={item[1]} alt="Flat-other" />
                          )}
                          {item[2] === undefined ? (
                            <img src="/no-photo.png" />
                          ) : (
                            <img src={item[2]} alt="Flat-other" />
                          )}
                        </div>
                        <div className={classes.secondColumn}>
                          {item[3] === undefined ? (
                            <img src="/no-photo.png" />
                          ) : (
                            <img src={item[3]} alt="Flat-other" />
                          )}
                          {item[4] === undefined ? (
                            <img src="/no-photo.png" />
                          ) : (
                            <img src={item[4]} alt="Flat-other" />
                          )}
                        </div>
                      </div>
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
                      item.map((photo: string) => {
                        return (
                          <div className={classes.imgBox}>
                            <img src={photo} />
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
            {/* <Calendar startDate={startDate} onChange={this.onChange} /> */}
            Kalendorius
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlatView;
