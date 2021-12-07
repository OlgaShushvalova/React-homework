import { ADD_MESSAGE_ACTION } from "./constants";

export const addMessageAction = ({ chatId, author, message }) => ({
  type: ADD_MESSAGE_ACTION,
  payload: { chatId, author, message },
});
