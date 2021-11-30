import React, { useState, useEffect } from "react";
import "./Chats.css";
import { Message } from "../../Message";
import { MessageForm } from "../../Components/MessageForm";
import { MessageList } from "../../Components/MessageList";
import { ChatList } from "../../Components/ChatList";
import { FIRST_MESSAGES, BOT_MESSAGES } from "./Constants";
import { Redirect, useParams } from "react-router";
import { ROUTES } from "../../Router/Constants";

const name = "друг";

export const Chat = ({ ChatList }) => {
  const { chatId } = useParams();
  if (!chatId || !ChatList[chatId]) {
    return <Redirect to={ROUTES.NO_CHAT} />;
  }
};

export function Chats() {
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
    <div className="Chats">
      <header className="Chats-header">Чат магазина</header>
      <main className="Chats-main">
        <section className="Chat-list">
          <ChatList />
        </section>
        <section className="Message-box">
          <Message name={name} />
          <MessageList messageList={messageList} />
          <MessageForm
            messageList={messageList}
            setMessageList={setMessageList}
          />
        </section>
      </main>
      <footer className="Chats-footer"></footer>
    </div>
  );
}
