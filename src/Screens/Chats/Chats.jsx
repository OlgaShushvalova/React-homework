import React, { useEffect, useState } from "react";
import "./Chats.css";
import { Message } from "../../Message";
import { MessageForm } from "../../Components/MessageForm";
import { MessageList } from "../../Components/MessageList";
import { ChatList } from "../../Components/ChatList";
import { INIT_CHATS } from "../../Components/ChatList/Constants";
import { Redirect, useParams } from "react-router";
import { ROUTES } from "../../Router/Constants";
import { useSelector, useDispatch } from "react-redux";
import { chatListSelector } from "../../Store/Chats/selectors";
import { chatMessagesSelector } from "../../Store/Messages/selectors";
import { addChatAction } from "../../Store/Chats/actions";
import { addMessageAction } from "../../Store/Messages/actions";
import firebase from "firebase";

const name = "друг";

export const Chats = () => {
  let { chatId } = useParams();
  const chatList = useSelector(chatListSelector);
  const dispatch = useDispatch();
  const messageList = useSelector(chatMessagesSelector(chatId));
  const [newChatName, setNewChatName] = useState("");
  // const [chats, setChats] = useState([]);

  useEffect(() => {
    Object.keys(INIT_CHATS).forEach((key) => {
      dispatch(
        addChatAction({
          id: key,
          name: INIT_CHATS[key].name,
        })
      );
    });
  }, []);

  /* useEffect(() => {
    firebase
      .database()
      .ref("chats")
      .child("chat")
      .on("value", (snapshot) => {
        const newChats = [];
        snapshot.forEach((entry) => {
          newChats.push(entry.val());
        });
        setChats(newChats);
      });
  }, []);*/

  const onAddChat = () => {
    firebase.database().ref("chats").child(chatId).push({ name: newChatName });
    setNewChatName("");
  };

  function setMessage() {
    dispatch(
      addMessageAction({
        chatId: chatId,
        author: "",
        message: "",
      })
    );
  }

  if (!chatId || !chatList[chatId]) return <Redirect to={ROUTES.NO_CHAT} />;

  return (
    <div className="Chats">
      <header className="Chats-header">Чат магазина</header>
      <main className="Chats-main">
        <section className="Chat-list">
          <ChatList />
        </section>
        <button onClick={onAddChat}>Добавить чат</button>
        <section className="Message-box">
          <Message name={name} />
          <MessageList
            messageList={messageList}
            chatName={chatList[chatId].name}
          />
          <MessageForm
            chatId={chatId}
            messageList={messageList}
            setMessage={setMessage}
          />
        </section>
      </main>
      <footer className="Chats-footer"></footer>
    </div>
  );
};
