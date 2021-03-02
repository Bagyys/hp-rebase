import doorTypes from "../types/doorTypes";

export interface InitialState {
  doorID: string;
  doorUrl: string;
}

const initialState: InitialState = {
  doorID: "Lg18299RHS10MxSh",
  doorUrl:
    "A3%nm*Wb_ID=Lg18299RHS10MxSh_&i1=1_&i2=1_&i3=1_&i4=1_&i5=1_&i6=1_&i7=1_&i8=1_&i9=1_&n1=1_&n2=1_&n3=1_&o1=0_&o2=0_&o3=0_&e=0",
};

const doorReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case doorTypes.INIT_DOORS:
      return {
        ...state,
        state: action.payload,
      };
    default:
      return state;
  }
};

export default doorReducer;
