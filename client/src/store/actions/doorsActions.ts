import { Action, Dispatch } from "redux";
import axios, { AxiosResponse } from "axios";

import doorTypes from "../types/doorTypes";
import { Lock } from "../reducers/doorsReducer";

// -------------------- URLS --------------------
// development URL
const url = process.env.REACT_APP_DEV_URL;

// production URL
// const url = process.env.REACT_APP_PROD_URL;
// -------------------- END of URLS --------------------

// -------------------- ACTION INTERFACES --------------------
export interface OpenDoorStart
  extends Action<typeof doorTypes.OPEN_DOOR_START> {}
export interface OpenDoorSuccess
  extends Action<typeof doorTypes.OPEN_DOOR_SUCCESS> {
  payload: Lock;
}
export interface OpenDoorFail extends Action<typeof doorTypes.OPEN_DOOR_FAIL> {
  payload: string;
}

export interface ResetDoorStart
  extends Action<typeof doorTypes.RESET_DOOR_START> {}
export interface ResetDoorSuccess
  extends Action<typeof doorTypes.RESET_DOOR_SUCCESS> {
  payload: Lock;
}
export interface ResetDoorFail
  extends Action<typeof doorTypes.RESET_DOOR_FAIL> {
  payload: string;
}

export type Actions =
  | OpenDoorStart
  | OpenDoorSuccess
  | OpenDoorFail
  | ResetDoorStart
  | ResetDoorSuccess
  | ResetDoorFail;
// -------------------- END of ACTION INTERFACES --------------------

// -------------------- ACTIONS --------------------

export const openDoorAction = (door: string) => async (dispatch: Dispatch) => {
  dispatch({ type: doorTypes.OPEN_DOOR_START });
  try {
    const response: AxiosResponse<Lock> = await axios.put(
      `${url}/openLock/?h=A3%nm*Wb&id=Lg18299RHS10MxSh&${door}=1`
    );
    dispatch({
      type: doorTypes.OPEN_DOOR_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    console.log("Erroras");
    dispatch({
      type: doorTypes.OPEN_DOOR_FAIL,
    });
  }
};

export const resetDoorAction = () => async (dispatch: Dispatch) => {
  dispatch({ type: doorTypes.RESET_DOOR_START });

  try {
    const response: AxiosResponse<Lock> = await axios.put(
      `${url}/reset/?h=A3%nm*Wb&id=Lg18299RHS10MxSh`
    );
    dispatch({
      type: doorTypes.RESET_DOOR_SUCCESS,
      payload: response.data,
    });
  } catch (err) {
    console.log("Erroras");
    dispatch({
      type: doorTypes.RESET_DOOR_FAIL,
    });
  }
};

// -------------------- END of ACTIONS --------------------

