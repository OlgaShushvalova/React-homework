import { GET_DOG_REQUEST, GET_DOG_SUCCESS, GET_DOG_ERROR } from "./constants";

const initialState = {
  dogUrl: undefined,
  loading: true,
  error: false,
};

export const dogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOG_REQUEST: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_DOG_SUCCESS: {
      return {
        ...state,
        loading: false,
        dogUrl: action.payload,
      };
    }
    case GET_DOG_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    default:
      return state;
  }
};
