import { ADD_MESSAGE_ACTION } from "./constants";

export const addMessageAction = ({ chatId, author, message }) => ({
  type: ADD_MESSAGE_ACTION,
  payload: { chatId, author, message },
});

export const addMessageWithThunk = (payload) => (dispatch, getState) => {
  dispatch(addMessageAction(payload));
  if (payload.message !== "Бот") {
    setTimeout(() => {
      dispatch(
        addMessageAction({
          chatId: payload.chatId,
          author: "Бот",
          message: "Спасибо, Ваше сообщение очень важно для нас",
        })
      );
    }, 1500);
  }
};
