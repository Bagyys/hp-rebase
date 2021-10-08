<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 00bce46
import { useEffect } from "react";
=======
import { useEffect } from "react";
=======
>>>>>>> a4143a5 (algorithm updates front to back)
=======
import { useEffect } from "react";
>>>>>>> 991278a (controllers and actions to get all locks and delete a lock. open and reset updated)
>>>>>>> 3932397
import { useDispatch, useSelector } from "react-redux";

import { StoreState } from "../../store/configureStore";
import Flats from "../../components/Flats/flats";
import Map from "../../components/Map/map";
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 3932397
import Lock from "../../containers/Lock/Lock";
import { getAllLocksAction } from "../../store/actions/lockActions";
import { LockProps } from "../../store/reducers/lockReducer";

<<<<<<< HEAD
<<<<<<< HEAD
=======
import { useDispatch } from "react-redux";
import { getDoorQuery, resetDoor } from "../../store/actions/doorsActions";
import Flats from "../../components/Flats/flats";
import Map from "../../components/Map/map";
>>>>>>> e97978a (Combine 12 coomits test)
=======
>>>>>>> 00bce46
=======
>>>>>>> 3932397
import classes from "../../App.module.scss";
import Filter from "../../components/Filter/filter";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllLocksAction());
  }, []);
  const locks: Array<LockProps> = useSelector(
    (state: StoreState) => state.lock.locks
  );

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 00bce46
=======
>>>>>>> 3932397
  useEffect(() => {}, [locks]);
  let lockComps = null;
  if (locks !== undefined && locks !== null) {
    lockComps = locks.map((lock: LockProps, index: number) => {
      return <Lock key={lock._id} index={index} />;
    });
  } else {
    lockComps = <></>;
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
  const testAction = (arg: string) => {
    dispatch(getDoorQuery(arg));
  };
  const resetAction = () => {
    dispatch(resetDoor());
  };

>>>>>>> e97978a (Combine 12 coomits test)
=======
>>>>>>> 00bce46
=======
=======
import {
  openDoorAction,
  resetDoorAction,
} from "../../store/actions/doorsActions";
=======
import Lock from "../../containers/Lock/Lock";
import { getAllLocksAction } from "../../store/actions/lockActions";
import { LockProps } from "../../store/reducers/lockReducer";
>>>>>>> 991278a (controllers and actions to get all locks and delete a lock. open and reset updated)

import classes from "../../App.module.scss";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllLocksAction());
  }, []);
  const locks: Array<LockProps> = useSelector(
    (state: StoreState) => state.lock.locks
  );

<<<<<<< HEAD
>>>>>>> a4143a5 (algorithm updates front to back)
=======
  useEffect(() => {}, [locks]);
  let lockComps = null;
  if (locks !== undefined && locks !== null) {
    lockComps = locks.map((lock: LockProps, index: number) => {
      return <Lock key={lock._id} index={index} />;
    });
  } else {
    lockComps = <></>;
  }
>>>>>>> 991278a (controllers and actions to get all locks and delete a lock. open and reset updated)
>>>>>>> 3932397
  return (
    <div className={classes.App}>
      <Filter />
      <div className={classes.contentBox}>
        <Flats />
        <Map />
      </div>
<<<<<<< HEAD
      <h1>Hello there</h1>
      <button onClick={() => testAction("o1")}>Front Door</button>
      <button onClick={() => testAction("o2")}>Flat Door</button>
      <button onClick={() => resetAction()}>Reset Door</button>
=======
<<<<<<< HEAD
      <h1>Hello there</h1>
<<<<<<< HEAD
      <button onClick={() => testAction("o1")}>Front Door</button>
      <button onClick={() => testAction("o2")}>Flat Door</button>
      <button onClick={() => resetAction()}>Reset Door</button>
=======
      <button disabled={disableButtons} onClick={() => doorAction("o1")}>
        Open front Door
      </button>
      <button disabled={disableButtons} onClick={() => doorAction("o2")}>
        Open flat Door
      </button>
      <button onClick={() => resetAction()}>Reset Doors</button>
>>>>>>> a4143a5 (algorithm updates front to back)
=======
      <div className={classes.Locks}>
        <h1>Hello there</h1>
        {lockComps}
      </div>
>>>>>>> 991278a (controllers and actions to get all locks and delete a lock. open and reset updated)
>>>>>>> 3932397
    </div>
  );
};

export default Home;
