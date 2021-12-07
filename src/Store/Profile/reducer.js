import { TOGGLE_USER_NAME_ACTION, CHANGE_USER_NAME_ACTION } from "./constants";

const initialState = {
  showName: true,
  userName: "",
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_USER_NAME_ACTION: {
      return {
        ...state,
        showName: !state.showName,
      };
    }
    case CHANGE_USER_NAME_ACTION: {
      return {
        ...state,
        userName: action.payload.userName,
      };
    }
    default:
      return state;
  }
};
