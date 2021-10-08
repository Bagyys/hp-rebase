import update from "react-addons-update";

import lockTypes from "../types/lockTypes";
import { Actions } from "../actions/lockActions";

export interface LockProps {
  _id: string;
  i1: number;
  i2: number;
  i3: number;
  i4: number;
  i5: number;
  i6: number;
  i7: number;
  i8: number;
  i9: number;
  o1: number;
  o2: number;
  o3: number;
  timeInterval: number;
  e: string;
}
export interface LockState {
  locks: Array<LockProps>;
}

const initialState: LockState = {
  locks: [] as Array<LockProps>,
};

const lockReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case lockTypes.GET_ALL_LOCKS_SUCCESS:
      return {
        ...state,
        locks: action.payload,
      };
    case lockTypes.OPEN_LOCK_SUCCESS:
      return update(state, {
        locks: {
          [action.payload.index]: { $set: action.payload.lock },
        },
      });
    case lockTypes.RESET_LOCK_SUCCESS:
      return update(state, {
        locks: {
          [action.payload.index]: { $set: action.payload.lock },
        },
      });
    case lockTypes.DELETE_LOCK_SUCCESS:
      return {
        ...state,
        locks: action.payload,
      };
    default:
      return state;
  }
};

export default lockReducer;
