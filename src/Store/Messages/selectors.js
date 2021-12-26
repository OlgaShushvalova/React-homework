export const messageListSelector = (state) => state.messages.messageList;
export const chatMessagesSelector = (chatId) => (state) =>
  state.messages.messageList[chatId];
