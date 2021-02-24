import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Signin from "./containers/Auth/Signin";
import Profile from "./containers/Users/Profile";
import Signup from "./containers/Users/Signup";
import Posts from "./containers/Posts/Posts";
import Direct from "./containers/Direct/Direct";
import ForgetPassword from "./containers/Auth/ForgetPassword";
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
      <PrivateRoute path="/" exact component={Posts} />
      <PrivateRoute path="/profile" component={Profile} />
      <PrivateRoute path="/direct" component={Direct} />
      <Route path="/signin" exact component={Signin} />
      <Route path="/forgetPassword" component={ForgetPassword} />
      <Route path="/signup" component={Signup} />
    </Switch>
  );
}

export default App;
