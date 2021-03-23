import { combineReducers } from "redux";
import lockReducer from "./lockReducer";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  lock: lockReducer,
  router: routerReducer,
});

export default rootReducer;
