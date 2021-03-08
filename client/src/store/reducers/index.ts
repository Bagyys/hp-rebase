import { combineReducers } from "redux";
import doorReducer from "./doorsReducer";
import { routerReducer } from "react-router-redux";

const rootReducer = combineReducers({
  doors: doorReducer,
  router: routerReducer,
});

export default rootReducer;
