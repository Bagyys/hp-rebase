import { combineReducers } from "redux";
import doorReducer from "./doorsReducer";

const rootReducer = combineReducers({
  doors: doorReducer,
});

export default rootReducer;
