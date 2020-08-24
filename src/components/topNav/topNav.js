import React, { useContext, useEffect } from "react";
// import {Container} from "reactstrap";
// import SignInComponent from "../../components/signInComponent/SignInComponent";
import { loginContext } from "../../context/LoginContext"
// import { usersContext } from "../../context/UsersContext";
import { useHistory } from "react-router-dom";
import {Row, Col, Container, Button } from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import "./topNav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import { HOME_NAV_ROUTES } from "../../pages/home/home";

const TopNav = () => {
const history = useHistory();

  return (
    <div className="top-nav d-flex  justify-content-between">
        <div className={'apple-container d-flex align-items-center justify-content-center'}>
            <FontAwesomeIcon icon={faAppleAlt} size={'4x'} classname={'apple'}/>
        </div>
        <div className={'link-container d-flex align-items-center'}>
            <Row className={'pr-5 d-flex align-items-center justify-content-end'}>
                <Col md="auto">
                    <div className="link" onClick={() => {history.push(HOME_NAV_ROUTES.iPhone)}}>
                        iPhone
                    </div>
                </Col>
                <Col md="auto">
                    <div className="link" onClick={() => {history.push(HOME_NAV_ROUTES.macBook)}}>
                        MacBook Pro
                    </div>
                </Col>
                <Col md="auto">
                    <div className="link" onClick={() => {history.push(HOME_NAV_ROUTES.watch)}}>
                        Watch
                    </div>
                </Col>
                <Col md="auto">
                    <Button className={'px-5'}>
                        Notify Me
                    </Button>
                </Col>
            </Row>
        </div>
    </div>
  );
}

export default TopNav;