import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import Login from './pages/login/Login';
import { LoginContextStateProvider } from "./context/LoginContext"
import { UsersContextStateProvider } from './context/UsersContext';
import Announcement from './pages/announcement/announcement';
import Home from './pages/home/home';




function App() {

  return (
    <Router>
      <Switch>
        <UsersContextStateProvider>
          <LoginContextStateProvider>
            <Route exact path="/">
              <Login/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/announcement">
              <Announcement/>
            </Route>
          </LoginContextStateProvider>
        </UsersContextStateProvider>
      </Switch>
    </Router>
  );
}

export default App;
