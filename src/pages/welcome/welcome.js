import React, { useContext, useEffect } from "react";
// import {Container} from "reactstrap";
// import SignInComponent from "../../components/signInComponent/SignInComponent";
import { loginContext } from "../../context/LoginContext"
// import { usersContext } from "../../context/UsersContext";
import { useHistory } from "react-router-dom";
import "./welcome.scss";
import {Row, Col, Button} from "reactstrap";
import Apple from "../../assets/Images/apple.png"
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  
  const enter = () => {
    history.push("/home/welcome");
  }

  return (
    <div className={'welcome'}>
        <div className={'container d-flex align-items-center justify-content-center'}>
            <div>
                <Row className={'pb-3'}>
                    <Col className={'text-center'}>
                        <div className={'welcome-to-apple'}>
                            Welcome to Apple
                        </div>
                    </Col>
                </Row>
                <Row className={'pb-3'}>
                    <Col className={'text-center'}>
                        <div className={'see-products'}>
                            See our Products
                        </div>
                    </Col>
                </Row>
                <Row className={'pb-3'}>
                    <Col className={'text-center'}>
                        <FontAwesomeIcon icon={faMobileAlt} size={'2x'}/>
                    </Col>
                    <Col className={'text-center'}>
                        <FontAwesomeIcon icon={faLaptop} size={'2x'}/>
                    </Col>
                    <Col className={'text-center'}>
                        {/* Don't own Font-awesome Pro. using clock as placeholder. */}
                        <FontAwesomeIcon icon={faClock} size={'2x'}/>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
  );
}

export default Welcome;