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
export const getDoorQuery = (fakeData: any) => async (dispatch: Dispatch) => {
  console.log(fakeData.o1, "o1 actione");
  try {
    const responseData: any = await axios.put(
      `${prodUrl}/door/${fakeData.doorUrl}`,
      {
        params: {
          t: "A3%nm*Wb",
          doorID: fakeData.doorID,
          i1: fakeData.i1,
          i2: fakeData.i2,
          i3: fakeData.i3,
          i4: fakeData.i4,
          i5: fakeData.i5,
          i6: fakeData.i6,
          i7: fakeData.i7,
          i8: "1",
          i9: "1",
          n1: "1",
          n2: "1",
          n3: "1",
          o1: fakeData.o1,
          o2: "1",
          o3: "1",
          e: "0",
        },
      }
    );
    dispatch({
      type: doorTypes.INIT_DOORS,
      payload: responseData.data,
    });
  } catch (err) {
    console.log("Erroras");
  }
};
