import doorTypes from "../types/doorTypes";
// import Actions from "../actions/doorsActions";
export interface Lock {
  lockId: string,
  i1: number,
  i2: number,
  i3: number,
  i4: number,
  i5: number,
  i6: number,
  i7: number,
  i8: number,
  i9: number,
  o1: number,
  o2: number,
  o3: number,
  e: number,
}
export interface InitialState {
  // Nothing: Array<String>;
  // locks: Array<Lock>;
  lock: Lock;
}

const initialState: InitialState = {
  // Nothing: [],
  // locks:[] as Array<Lock>
  lock: {
    lockId: "Lg18299RHS10MxSh",
    i1: 0,
    i2: 0,
    i3: 0,
    i4: 0,
    i5: 0,
    i6: 0,
    i7: 0,
    i8: 0,
    i9: 0,
    o1: 0,
    o2: 0,
    o3: 0,
    e: 0,
  }
};

const doorReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case doorTypes.OPEN_DOOR_SUCCESS:
      return {
        ...state,
        lock: action.payload,
      };
      case doorTypes.RESET_DOOR_SUCCESS:
        return {
          ...state,
          lock: action.payload,
        };
    default:
      return state;
  }
};

export default doorReducer;
