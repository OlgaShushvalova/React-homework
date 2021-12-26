import { DOG_URL } from "../../Api";
import { GET_DOG_REQUEST, GET_DOG_SUCCESS, GET_DOG_ERROR } from "./constants";

export const getDogRequestAction = () => ({
  type: GET_DOG_REQUEST,
});

export const getDogSuccessAction = (dogUrl) => ({
  type: GET_DOG_SUCCESS,
  payload: dogUrl,
});

export const getDogErrorAction = () => ({
  type: GET_DOG_ERROR,
});

export const getDogActionWithThunk = () => async (dispatch, getState) => {
  dispatch(getDogRequestAction());

  try {
    const response = await fetch(DOG_URL);

    if (!response.ok) {
      throw new Error("error getting data whith status");
    }
    const result = await response.json();

    dispatch(getDogSuccessAction(result.message));
  } catch (error) {
    dispatch(getDogErrorAction());
  }
};
