import React, { useContext, useEffect } from "react";
// import {Container} from "reactstrap";
// import SignInComponent from "../../components/signInComponent/SignInComponent";
import { loginContext } from "../../context/LoginContext"
// import { usersContext } from "../../context/UsersContext";
import { useHistory, useLocation  } from "react-router-dom";
import {Row, Col, Container } from "reactstrap";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import TopNav from "../../components/topNav/topNav";
import RightSideNav from "../../components/rightSideNav/rightSideNav";

export const HOME_NAV_ROUTES = {
  welcome: '/home/welcome',
  iPhone: '/home/iphone',
  macBook: '/home/macbook-pro',
  watch: '/home/watch'
}

const Home = () => {
  const loginState = useContext(loginContext)
  // const usersState = useContext(usersContext)
  const history = useHistory();
  const location = useLocation();
  console.log('location', location.pathname)

  useEffect(() => {
    console.log(loginState.state)
    if(!loginState.state.loggedIn) {
        history.push("/");
    }
  })

  return (
    <div className={'home'}>
      <div className="left-bar">

      </div>
      
      <div className="general-background">
        <Router>
        <TopNav/>
            <Switch>
              <Route path={HOME_NAV_ROUTES.welcome}>
                <Welcome/>
              </Route>
              <Route path={HOME_NAV_ROUTES.iPhone}>
                <IPhone/>
              </Route>
              <Route path={HOME_NAV_ROUTES.macBook}>
                <Macbook/>
              </Route>
              <Route path={HOME_NAV_ROUTES.watch}>
                <Watch/>
              </Route>
            </Switch>
          </Router>
      </div>
    </div>
  );
}

export default Home;