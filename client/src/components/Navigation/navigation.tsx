import classes from "./navigation.module.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogoImg from "../../assets/images/house.png";
import NotificationImg from "../../assets/images/bell.png";
import ProfileImg from "../../assets/images/profile.png";
function Navigation() {
  return (
    <div className={classes.Navigation}>
      <div className={classes.NavigationWrapper}>
        <div className={classes.Logo}>
          <h1>
            <a href="/">Logo</a>
          </h1>
        </div>

        <div className={classes.Routes}>
          <Router>
            <ul>
              <li>
                <Link to="/reservation">Reservations</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
              <li>
                <Link to="/history">History</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
            </ul>
          </Router>
        </div>

        <div className={classes.Profile}>
          <img src={NotificationImg} alt="Notification Bell" />
          <img src={ProfileImg} alt="Profile Picture" />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
