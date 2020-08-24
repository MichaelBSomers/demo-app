import React, { useContext, useEffect } from "react";
import { loginContext } from "../../context/LoginContext"
import { useHistory } from "react-router-dom";
import "./announcement.scss";
import {Row, Col, Button, Container} from "reactstrap";
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Announcement = () => {
  const loginState = useContext(loginContext)
  const history = useHistory();
  useEffect(() => {
    console.log(loginState.state)
    if(!loginState.state.loggedIn) {
        history.push("/");
    }
  })

  return (
    <div className={'announcement'}>
        <Container className={'container d-flex align-items-center justify-content-center'}>
            <div className={'apple-container d-flex align-items-center justify-content-center'}>
                <FontAwesomeIcon icon={faAppleAlt} size={'10x'} classname={'apple'}/>
            </div>
            <div>
                <Row>
                    <Col className={'text-center'}>
                        <div className={'new-products'}>
                            New Products Coming This Summer
                        </div>
                    </Col>
                </Row>
                <Row className={'pt-5'}>
                    <Col className={'text-center'}>
                        <div className={'year'}>
                            2020
                        </div>
                    </Col>
                </Row>
                <Row className={'pt-5'}>
                    <Col className={'text-center'}>
                        <Button onClick={() => {history.push("/home/welcome")}} className={'enter-btn px-4 py-2'} size="md">
                            Enter
                        </Button>
                    </Col>
                </Row>
            </div>
        </Container>
    </div>
  );
}

export default Announcement;