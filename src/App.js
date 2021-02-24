import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Signin from "./components/containers/Signin";
import Profile from "./components/containers/Profile";

import Signup from "./components/containers/Signup";
import Posts from "./components/containers/Posts";
import Direct from "./components/containers/Direct/Direct";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { isUserLoggedIn } from "./actions";

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    if (!auth.authanticate) {
      dispatch(isUserLoggedIn());
    }
  }, [auth.authanticate]);

  return (
    <Switch>
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/" component={Posts} />
      <PrivateRoute path="/direct" component={Direct} />
      <Route path="/signin" exact component={Signin} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
}

export default App;
