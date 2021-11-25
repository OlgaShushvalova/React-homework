import React, { useState, useEffect } from "react";
import "./App.css";
import { Message } from "./Message";
import { MessageForm } from "./Components/MessageForm";
import { MessageList } from "./Components/MessageList";

const name = "друг";

function App() {
  const FIRST_MESSAGES = {
    id: 1,
    author: "Бот",
    text: "Приветствуем Вас в нашем магазине. Оставьте Ваше сообщение.",
  };

  const BOT_MESSAGES = {
    id: 2,
    author: "Бот",
    text: "Спасибо, Ваше сообщение очень важно для нас!",
  };
  const [messageList, setMessageList] = useState([FIRST_MESSAGES]);

  useEffect(() => {
    let timer;
    if (messageList[messageList.length - 1].author !== "Бот")
      timer = setTimeout(() => {
        setMessageList([...messageList, BOT_MESSAGES]);
      }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, [messageList]);

  return (
    <div className="App">
      <header className="App-header">Чат магазина</header>
      <main className="App-main">
        <Message name={name} />
        <MessageList messageList={messageList} />
        <MessageForm
          messageList={messageList}
          setMessageList={setMessageList}
        />
      </main>
      <footer className="App-footer"></footer>
    </div>
  );
}

export default App;
