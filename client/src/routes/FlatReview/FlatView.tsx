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
  const element1 = (
    <div className={classes.Images}>
      <div className={classes.MainImage}>
        <img src={flat.images[0]} alt="Flat-main" />
      </div>
      <div className={classes.OtherImages}>
        <div className={classes.firstColumn}>
          <img src={flat.images[1]} alt="Flat-other" />
          <img src={flat.images[2]} alt="Flat-other" />
        </div>
        <div className={classes.secondColumn}>
          <img src={flat.images[3]} alt="Flat-other" />
          <img src={flat.images[4]} alt="Flat-other" />
        </div>
      </div>
    </div>
  );
  let arrayAfterLoad = flat.images.slice(5);
  arrayAfterLoad.length = 8;

  const element2 = (
    <div className={classes.Images2}>
      {arrayAfterLoad.map((image: string) => {
        console.log(image, "kokie rezults?");
        return (
          <div className={classes.imgBox}>
            <img src={image} />
          </div>
        );
      })}
    </div>
  );

  let ultimateArray = [element1, element2];
  const length = ultimateArray.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
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
            return (
              <div
                className={
                  index === current
                    ? `${classes.slide} ${classes.active}`
                    : classes.slide
                }
              >
                {index === current && item}
              </div>
            );
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
          <div className={classes.calendar}>Kalendorius</div>
        </div>
      </div>
    </div>
  );
}

export default FlatView;
