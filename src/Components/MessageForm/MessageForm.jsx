import { useState } from "react";
import "./MessageForm.css";

export function MessageForm({ messageList, setMessageList }) {
  const [messageAuthor, setMessageAuthor] = useState("");
  const [messageText, setMessageText] = useState("");

  const handleAuthorChange = (e) => setMessageAuthor(e.target.value);
  const handleTextChange = (e) => setMessageText(e.target.value);

  const handleAdd = (e) => {
    const newMessage = {
      id: 3,
      author: messageAuthor,
      text: messageText,
    };

    setMessageAuthor("");
    setMessageText("");
    return setMessageList([...messageList, newMessage]);
  };

  return (
    <form
      className="message-form"
      action="#"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        className="message-form__author"
        value={messageAuthor}
        onChange={handleAuthorChange}
        placeholder="Имя"
      />
      <textarea
        className="message-form__text"
        value={messageText}
        onChange={handleTextChange}
        placeholder="Текст сообщения"
      ></textarea>
      <button className="message-form__button" onClick={handleAdd}>
        Отправить
      </button>
    </form>
  );
}
