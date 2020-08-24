import React, { useContext, useEffect } from "react";
// import {Container} from "reactstrap";
// import SignInComponent from "../../components/signInComponent/SignInComponent";
import { loginContext } from "../../context/LoginContext"
// import { usersContext } from "../../context/UsersContext";
import { useHistory } from "react-router-dom";
import {Row, Col } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import "./home.scss";
import IPhone from "../iPhone/iPhone";
import Macbook from "../macbook/macbook";
import Watch from "../watch/watch";
import Welcome from "../welcome/welcome";

const Home = () => {
  const loginState = useContext(loginContext)
  // const usersState = useContext(usersContext)
  const history = useHistory();

  useEffect(() => {
    console.log(loginState.state)
    if(!loginState.state.loggedIn) {
        history.push("/");
    }
  }, [history, loginState.state])

  return (
    <div className={'home'}>
      <Router>
      <Switch>
            <Route exact path="/welcome">
              <Welcome/>
            </Route>
            <Route exact path="/iphone">
              <IPhone/>
            </Route>
            <Route path="/macbook-pro">
              <Macbook/>
            </Route>
            <Route path="/watch">
              <Watch/>
            </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default Home;