import React, { useState, useEffect, useContext } from "react";
import "./Chats.css";
import { Message } from "../../Message";
import { MessageForm } from "../../Components/MessageForm";
import { MessageList } from "../../Components/MessageList";
import { ChatList } from "../../Components/ChatList";
import { INIT_CHATS, BOT_MESSAGES } from "../../Components/ChatList/Constants";
import { Redirect, useParams } from "react-router";
import { ROUTES } from "../../Router/Constants";
import { chatListContext } from "../../Router/context";

const name = "друг";

export const Chats = () => {
  let { chatId } = useParams();
  const chatList = useContext(chatListContext);

  if (!INIT_CHATS[chatId]) chatId = "id0";

  const [messageList, setMessageList] = useState(INIT_CHATS[chatId].messages);

  useEffect(() => {
    setMessageList(INIT_CHATS[chatId].messages);
  }, [chatId]);

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

  if (!chatId || !chatList[chatId]) return <Redirect to={ROUTES.NO_CHAT} />;

  return (
    <div className="Chats">
      <header className="Chats-header">Чат магазина</header>
      <main className="Chats-main">
        <section className="Chat-list">
          <ChatList />
        </section>
        <section className="Message-box">
          <Message name={name} />
          <MessageList
            messageList={messageList}
            chatName={chatList[chatId].name}
          />
          <MessageForm
            chatId={chatId}
            messageList={messageList}
            setMessageList={setMessageList}
          />
        </section>
      </main>
      <footer className="Chats-footer"></footer>
    </div>
  );
};
