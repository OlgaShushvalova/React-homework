import React, { useState } from "react";
import { BrowserRouter, Switch, Link, Route, Redirect } from "react-router-dom";
import { ROUTES } from "./Constants";
import Box from "@mui/material/Box";

import { Home } from "../Screens/Home";
import { Chats } from "../Screens/Chats";
import { Profile } from "../Screens/Profile";
import "./Router.css";
import { CHAT_LIST } from "../Components/ChatList/Constants";

export const Router = () => {
  const [ChatList] = useState(CHAT_LIST);
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
      </Box>
      <Switch>
        <Route pach={ROUTES.PROFILE} component={Profile} />
        <Route pach={ROUTES.CHATS} component={Chats} ChatList={ChatList} />
        <Route exact pach={ROUTES.HOME} component={Home} />

        <Route path={ROUTES.NO_CHAT} ChatList={ChatList}>
          No chat content
        </Route>
        <Route path={ROUTES.NOT_FOUND}> Not found 404 </Route>
        <Route>
          <Redirect to={ROUTES.NOT_FOUND} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
