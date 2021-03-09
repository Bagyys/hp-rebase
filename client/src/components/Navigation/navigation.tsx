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
          <a href="/">
            <img src="./Logo.png" alt="Logo" />
          </a>
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
          <div className={classes.bell}>
            <img src={NotificationImg} alt="Notification Bell" />
          </div>
          <img src={ProfileImg} alt="Profile Picture" />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
