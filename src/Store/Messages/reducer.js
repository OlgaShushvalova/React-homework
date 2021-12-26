import { ADD_MESSAGE_ACTION } from "./constants";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  messageList: {},
};

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE_ACTION: {
      const { chatId, ...rest } = action.payload;
      const chatMessages = state.messageList[chatId] ?? [];
      return {
        ...state,
        messageList: {
          ...state.messageList,
          [chatId]: [...chatMessages, { id: uuidv4(), ...rest }],
        },
      };
    }
    default:
      return state;
  }
};
