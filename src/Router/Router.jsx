import React, { useState } from "react";
import { BrowserRouter, Switch, Link, Route, Redirect } from "react-router-dom";
import { ROUTES } from "./Constants";
import Box from "@mui/material/Box";
import { Home } from "../Screens/Home";
import { Chats } from "../Screens/Chats";
import { Profile } from "../Screens/Profile";
import "./Router.css";
import { INIT_CHATS } from "../Components/ChatList/Constants";
import { ChatList } from "../Components/ChatList";
import { chatListContext } from "./context";
import { Dogs } from "../Screens/Dogs";

export const Router = () => {
  const [сhatList] = useState(INIT_CHATS);
  const preventDefault = (event) => event.preventDefault();
  return (
    <BrowserRouter>
      <Box
        className="Router-box"
        sx={{
          typography: "body1",
          "& > :not(style) + :not(style)": {
            ml: 2,
          },
        }}
        onClick={preventDefault}
      >
        <Link to={ROUTES.HOME}>Дом</Link>
        <Link to={ROUTES.CHAT}>Чаты</Link>
        <Link to={ROUTES.PROFILE}>Профиль</Link>
        <Link to={ROUTES.DOGS}>Собаки</Link>
      </Box>
      <chatListContext.Provider value={сhatList}>
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.CHATS} component={Chats} сhatList={сhatList} />
          <Route path={ROUTES.PROFILE} component={Profile} />
          <Route path={ROUTES.NO_CHAT}>
            <ChatList />
          </Route>
          <Route path={ROUTES.DOGS}>
            <Dogs />
          </Route>
          <Route path={ROUTES.NOT_FOUND}> Not found 404 </Route>
          <Route>
            <Redirect to={ROUTES.NOT_FOUND} />
          </Route>
        </Switch>
      </chatListContext.Provider>
    </BrowserRouter>
  );
};
