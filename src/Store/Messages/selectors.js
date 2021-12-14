export const messageListSelector = (state) => state.messages.messageList;
export const chatMessagesSelector = (state, chatId) =>
  state.messages.messageList[chatId];
