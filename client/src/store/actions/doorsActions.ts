import { Action } from "redux";
import doorTypes from "../types/doorTypes";
import { Dispatch } from "redux";
import axios from "axios";
export interface GetQuery extends Action<typeof doorTypes.INIT_DOORS> {
  payload: string;
}

export type Actions = GetQuery;

const devUrl = "http://localhost:9000";
const prodUrl = "http://18.195.50.192:9000";
export const frontDoors = (arg: string) => async (dispatch: Dispatch) => {
  try {
    const responseData: any = await axios.put(
      `${devUrl}/frontDoors/?t=A3%nm*Wb&id=Lg18299RHS10MxSh&${arg}=1`
    );
    dispatch({
      type: doorTypes.INIT_DOORS,
      payload: responseData.data.door,
    });
  } catch (err) {
    console.log("Erroras");
  }
};
export const flatDoors = (arg: string) => async (dispatch: Dispatch) => {
  try {
    const responseData: any = await axios.put(
      `${devUrl}/flatDoors/?t=A3%nm*Wb&id=Lg18299RHS10MxSh&${arg}=1`
    );
    dispatch({
      type: doorTypes.INIT_DOORS,
      payload: responseData.data.door,
    });
  } catch (err) {
    console.log("Erroras");
  }
};
