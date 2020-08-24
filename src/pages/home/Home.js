import React, { useContext, useEffect } from "react";
import { loginContext } from "../../context/LoginContext"
import { useHistory, useLocation  } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import "./home.scss";
import IPhone from "../iPhone/iPhone";
import Macbook from "../macbook/macbook";
import Watch from "../watch/watch";
import Welcome from "../welcome/welcome";
import TopNav from "../../components/topNav/topNav";
import axios from 'axios';
import { newItemsContext, newItemsContextActions } from "../../context/newItemsContext";

export const HOME_NAV_ROUTES = {
  welcome: '/home/welcome',
  iPhone: '/home/iphone',
  macBook: '/home/macbook-pro',
  watch: '/home/watch'
}

const headers = {
  "Access-Control-Allow-Origin": "*",
  'Content-Type': 'application/json',
}

const Home = () => {
  const loginState = useContext(loginContext)
  const newItemsState = useContext(newItemsContext)
  const history = useHistory();
  const location = useLocation();
  console.log('location', location.pathname)

  useEffect(() => {
    console.log(loginState.state)
    if(!loginState.state.loggedIn) {
        history.push("/");
    }
    getItemDates()
  })

  const getItemDates = async () => {
    // TODO Having issues with CORS --- Look into fixes.
    const results = await axios.get(`https://boalt-interview.herokuapp.com/api/shipping-dates`, {
      headers: headers,
      proxy: "https://www.google.com"
    })
    console.log('results', results)
    newItemsState.dispatch({
      type: newItemsContextActions.UPDATE_ITEM_DATES,
      value: results
    })
  }

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