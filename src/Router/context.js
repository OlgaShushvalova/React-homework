import React from "react";
import { INIT_CHATS } from "../Components/ChatList/Constants";

export const chatListContext = React.createContext({ chatList: INIT_CHATS });
