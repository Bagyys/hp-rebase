import { combineReducers } from "redux";
import lockReducer from "./lockReducer";
import { routerReducer } from "react-router-redux";
import orderReducer from "./bookingReducer";
import bookingReducer from "./bookingReducer";
const rootReducer = combineReducers({
  lock: lockReducer,
  router: routerReducer,
  booking: bookingReducer,
});

export default rootReducer;
