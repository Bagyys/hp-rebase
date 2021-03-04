import classes from "./filter.module.scss";
import LoupeImg from "../../assets/images/loupe.png";
function Filter() {
  return (
    <div className={classes.Filter}>
      <div className={classes.FilterWrapper}>
        <div className={classes.input}>
          <img src={LoupeImg} alt="Search icon" />
          <input type="search" placeholder="Frankfrut, Germany"></input>
        </div>
        <div className={classes.optionButtons}>
          <div>
            <h2>Price</h2>
            <select name="" id={classes.Price}>
              <option>All prices</option>
              <option>50€</option>
              <option>100€</option>
              <option>200€</option>
              <option>500€</option>
            </select>
          </div>
          <div>
            <h2>Rooms</h2>
            <select name="" id={classes.Rooms}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div>
            <h2>Beds</h2>
            <select name="" id={classes.Beds}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
