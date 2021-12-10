import { ADD_CHAT_ACTION, DELETE_CHAT_ACTION } from "./constants";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  chatList: [],
};

export const chatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHAT_ACTION: {
      return {
        ...state,
        chatList: [
          ...state.chatList,
          { id: uuidv4(), name: action.payload.name },
        ],
      };
    }
    case DELETE_CHAT_ACTION: {
      const filteredChats = state.chatList.filter(
        ({ id }) => id !== action.payload.chatId
      );
      return {
        ...state,
        chatList: [...filteredChats],
      };
    }
    default:
      return state;
  }
};
