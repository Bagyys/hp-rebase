<<<<<<< HEAD
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StoreState } from "../../store/configureStore";
import Flats from "../../components/Flats/flats";
import Map from "../../components/Map/map";
import Lock from "../../containers/Lock/Lock";
import { getAllLocksAction } from "../../store/actions/lockActions";
import { LockProps } from "../../store/reducers/lockReducer";

=======
import { useDispatch } from "react-redux";
import { getDoorQuery, resetDoor } from "../../store/actions/doorsActions";
import Flats from "../../components/Flats/flats";
import Map from "../../components/Map/map";
>>>>>>> e97978a (Combine 12 coomits test)
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
  useEffect(() => {}, [locks]);
  let lockComps = null;
  if (locks !== undefined && locks !== null) {
    lockComps = locks.map((lock: LockProps, index: number) => {
      return <Lock key={lock._id} index={index} />;
    });
  } else {
    lockComps = <></>;
  }
=======
  const testAction = (arg: string) => {
    dispatch(getDoorQuery(arg));
  };
  const resetAction = () => {
    dispatch(resetDoor());
  };

>>>>>>> e97978a (Combine 12 coomits test)
  return (
    <div className={classes.App}>
      <Filter />
      <div className={classes.contentBox}>
        <Flats />
        <Map />
      </div>
      <h1>Hello there</h1>
      <button onClick={() => testAction("o1")}>Front Door</button>
      <button onClick={() => testAction("o2")}>Flat Door</button>
      <button onClick={() => resetAction()}>Reset Door</button>
    </div>
  );
};

export default Home;
