import { useDispatch, useSelector } from "react-redux";

import { StoreState } from "../../store/configureStore";
import Flats from "../../components/Flats/flats";
import Map from "../../components/Map/map";
import {
  openDoorAction,
  resetDoorAction,
} from "../../store/actions/doorsActions";

import classes from "../../App.module.scss";

const Home = () => {
  const dispatch = useDispatch();
  const o1 = useSelector((state: StoreState) => state.doors.lock.o1);
  const o2 = useSelector((state: StoreState) => state.doors.lock.o2);
  const disableButtons = o1 === 1 || o2 === 1 ? true : false;
  const doorAction = (door: string) => {
    dispatch(openDoorAction(door));
  };

  const resetAction = () => {
    dispatch(resetDoorAction());
  };

  return (
    <div className={classes.App}>
      <div className={classes.contentBox}>
        <Flats />
        <Map />
      </div>
      <h1>Hello there</h1>
      <button disabled={disableButtons} onClick={() => doorAction("o1")}>
        Open front Door
      </button>
      <button disabled={disableButtons} onClick={() => doorAction("o2")}>
        Open flat Door
      </button>
      <button onClick={() => resetAction()}>Reset Doors</button>
    </div>
  );
};

export default Home;
