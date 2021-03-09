import classes from "./filter.module.scss";
import LoupeImg from "../../assets/images/loupe.png";
function Filter() {
  function myFunction() {
    (document.getElementById("myDropdown") as any).classList.toggle("show");
  }

  window.onclick = function (event: any) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdownContent");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };
  return (
    <div className={classes.Filter}>
      <div className={classes.FilterWrapper}>
        <div className={classes.input}>
          <img src={LoupeImg} alt="Search icon" />
          <input type="search" placeholder="Frankfrut, Germany"></input>
        </div>
        <div className={classes.optionButtons}>
          <div>
            <div className={classes.dropdown}>
              <button onClick={() => myFunction()} className={classes.dropbtn}>
                Dropdown
              </button>
              <div id="myDropdown" className={classes.dropdownContent}>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
              </div>
            </div>
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
