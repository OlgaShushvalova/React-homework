import React, { useState } from "react";
import "./MessageList.css";

const MessageObject = [
  { autor: "Bot", text: "Hi, what's your name" },
  { autor: "Sara", text: "Hi, my name Sara" },
];

export const MessageList = () => {
  const [messageList] = useState(MessageObject);
  const [text, setText] = useState("");

  const handleTextChange = (e) => setText(e.target.value);
  const sendMessage = () => setText;

  return (
    <div>
      {messageList.map((message) => (
        <div key={message} className="Autor">
          {message.autor}
          <div className="Text">{message.text}</div>
        </div>
      ))}
      <input value={text} onChange={handleTextChange} className="Input"></input>
      <button onClick={sendMessage} className="Button">
        Отправить
      </button>
    </div>
  );
};
