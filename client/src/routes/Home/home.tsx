import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { StoreState } from "../../store/configureStore";
import Flats from "../../components/Flats/flats";
import Map from "../../components/Map/map";
import Lock from "../../containers/Lock/Lock";
import { getAllLocksAction } from "../../store/actions/lockActions";
import { LockProps } from "../../store/reducers/lockReducer";

import classes from "../../App.module.scss";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllLocksAction());
  }, []);
  const locks: Array<LockProps> = useSelector(
    (state: StoreState) => state.lock.locks
  );

  useEffect(() => {}, [locks]);
  let lockComps = null;
  if (locks !== undefined && locks !== null) {
    lockComps = locks.map((lock: LockProps, index: number) => {
      return <Lock key={lock._id} index={index} />;
    });
  } else {
    lockComps = <></>;
  }
  return (
    <div className={classes.App}>
      <div className={classes.contentBox}>
        <Flats />
        <Map />
      </div>
      <div className={classes.Locks}>
        <h1>Hello there</h1>
        {lockComps}
      </div>
    </div>
  );
};

export default Home;
