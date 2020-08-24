import React, { useContext, useEffect } from "react";
// import {Container} from "reactstrap";
// import SignInComponent from "../../components/signInComponent/SignInComponent";
import { loginContext } from "../../context/LoginContext"
// import { usersContext } from "../../context/UsersContext";
import { useHistory } from "react-router-dom";
import "./welcome.scss";
import {Row, Col, Button} from "reactstrap";
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HOME_NAV_ROUTES } from "../home/home";

const Welcome = () => {
  const loginState = useContext(loginContext)
//   const usersState = useContext(usersContext)
  const history = useHistory();
  useEffect(() => {
    console.log(loginState.state)
    if(!loginState.state.loggedIn) {
        history.push("/");
    }
  })

  return (
    <div className={'welcome'}>
        <div className={'container d-flex align-items-center justify-content-center'}>
            <div className={'apple-container'}>
                <FontAwesomeIcon icon={faAppleAlt} size={'10x'} classname={'apple'}/>
            </div>
            <div>
                <Row className={'pb-5'}>
                    <Col className={'text-center'}>
                        <div className={'welcome-to-apple'}>
                            Welcome to Apple
                        </div>
                    </Col>
                </Row>
                <Row className={'pb-5'}>
                    <Col className={'text-center'}>
                        <div className={'see-products'}>
                            See our Products
                        </div>
                    </Col>
                </Row>
                <Row className={'link-container'}>
                    <Col className={'text-center'}>
                      <div>
                        <FontAwesomeIcon icon={faMobileAlt} size={'2x'} onClick={() => {history.push(HOME_NAV_ROUTES.iPhone)}}/>
                      </div>
                    </Col>
                    <Col className={'text-center'}>
                        <FontAwesomeIcon icon={faLaptop} size={'2x'} onClick={() => {history.push(HOME_NAV_ROUTES.macBook)}}/>
                    </Col>
                    <Col className={'text-center'}>
                      {/* Don't own Font-awesome Pro. using clock as placeholder instead of watch. */}
                        <FontAwesomeIcon icon={faClock} size={'2x'} onClick={() => {history.push(HOME_NAV_ROUTES.watch)}}/>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
  );
}

export default Welcome;