import { useDispatch } from "react-redux";
import { frontDoors, flatDoors } from "../../store/actions/doorsActions";
import Flats from "../../components/Flats/flats";
import Map from "../../components/Map/map";
import classes from "../../App.module.scss";

function Home() {
  const dispatch = useDispatch();

  const frontDoorsActions = (arg: string) => {
    dispatch(frontDoors(arg));
  };
  const flatDoorsActions = (arg: string) => {
    dispatch(flatDoors(arg));
  };
  return (
    <div className={classes.App}>
      <div className={classes.contentBox}>
        <Flats />
        <Map />
      </div>
      <h1>Hello there</h1>
      <button onClick={() => frontDoorsActions("o1")}>Front Door</button>
      <button onClick={() => flatDoorsActions("o2")}>Flat Door</button>
    </div>
  );
}

export default Home;
