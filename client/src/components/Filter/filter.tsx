import classes from "./filter.module.scss";
import LoupeImg from "../../assets/images/loupe.png";
import Dropdown from "../DropDown/DropDown";

function Filter() {
  const priceData = [
    {
      id: 1,
      value: "100",
    },
    {
      id: 2,
      value: "200",
    },
    {
      id: 3,
      value: "300",
    },
  ];

  const typeData = [
    {
      id: 1,
      value: "Apartments",
    },
    {
      id: 2,
      value: "Houses",
    },
    {
      id: 3,
      value: "Condos",
    },
    {
      id: 4,
      value: "Townhomes",
    },
  ];

  const lifeStyleData = [
    {
      id: 1,
      value: "Student",
    },
    {
      id: 2,
      value: "Senior Housing",
    },
    {
      id: 3,
      value: "Short Term",
    },
    {
      id: 4,
      value: "Military Housing",
    },
    {
      id: 5,
      value: "Corporate Housing",
    },
  ];

  return (
    <div className={classes.Filter}>
      <div className={classes.FilterWrapper}>
        <div className={classes.input}>
          <img src={LoupeImg} alt="Search icon" />
          <input type="search" placeholder="Frankfrut, Germany"></input>
        </div>
        <div className={classes.optionButtons}>
          <Dropdown title="Price" items={priceData} type="mixed" />
          <Dropdown title="Type" items={typeData} type="list" />
          <Dropdown title="Beds" items={[]} type="beds" />
          <Dropdown title="Lifestyle" items={lifeStyleData} type="list" />
        </div>
      </div>
    </div>
  );
}

export default Filter;
