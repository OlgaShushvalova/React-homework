import React, { useEffect, useState } from "react";
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
import { SignIn } from "../Screens/SignIn";
import { SingUp } from "../Screens/SignUp/SignUp";
import firebase from "firebase";
import { CircularProgress } from "@mui/material";
import { PrivateRoute } from "../Components/PrivateRoute";
import { PublicRoute } from "../Components/PublicRoute/PublicRoute";

export const Router = () => {
  const [сhatList] = useState(INIT_CHATS);
  const preventDefault = (event) => event.preventDefault();
  const [auth, setAuth] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const handleInitFirebaseAuth = async () => {
    await firebase.auth().onAuthStateChanged((user) => {
      setAuth(user);
      setLoading(false);
    });
  };

  useEffect(() => {
    handleInitFirebaseAuth();
  }, []);

  if (loading) return <CircularProgress color="secondary" />;

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
        <Link to={ROUTES.SIGN_IN}>Sign in</Link>
        <Link to={ROUTES.SIGN_UP}>Sign up</Link>
      </Box>
      <chatListContext.Provider value={сhatList}>
        <Switch>
          <PublicRoute exact path={ROUTES.HOME} component={Home} />
          <PrivateRoute path={ROUTES.CHATS}>
            component={Chats}
            сhatList={сhatList}
          </PrivateRoute>
          <PrivateRoute path={ROUTES.PROFILE} component={Profile} />
          <PrivateRoute path={ROUTES.NO_CHAT}>
            <ChatList />
          </PrivateRoute>
          <Route path={ROUTES.DOGS} auth={auth}>
            <Dogs />
          </Route>
          <PublicRoute exact path={ROUTES.SIGN_IN}>
            <SignIn />
          </PublicRoute>
          <PublicRoute exact path={ROUTES.SIGN_UP}>
            <SingUp />
          </PublicRoute>
          <Route path={ROUTES.NOT_FOUND}> Not found 404 </Route>
          <Route>
            <Redirect to={ROUTES.NOT_FOUND} />
          </Route>
        </Switch>
      </chatListContext.Provider>
    </BrowserRouter>
  );
};
