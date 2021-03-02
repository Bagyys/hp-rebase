import { useSelector } from "react-redux";
import "./App.css";
import { useDispatch } from "react-redux";
import { getDoorQuery } from "./store/actions/doorsActions";
function App() {
  const dispatch = useDispatch();

  const fakeData: any = {
    doorID: "Lg18299RHS10MxSh",
    i1: "1",
    i2: "1",
    i3: "1",
    i4: "1",
    i5: "1",
    i6: "1",
    i7: "1",
    i8: "1",
    i9: "1",
    n1: "1",
    n2: "1",
    n3: "1",
    o1: "0",
    o2: "1",
    o3: "1",
    e: "0",
    doorUrl:
      "?t=A3%nm*Wb&id=Lg18299RHS10MxSh&i1=1&i2=1&i3=1&i4=1&i5=1&i6=1&i7=1&i8=1&i9=1&n1=1&n2=1&n3=1&o1=1&o2=0&o3=0&e=0",
  };

  const testAction = () => {
    dispatch(getDoorQuery(fakeData));
  };

  return (
    <div className="App">
      <h1>Hello there</h1>
      <button onClick={() => testAction()}>Front Door</button>
      <button>Flat Door</button>
    </div>
  );
}

export default App;
