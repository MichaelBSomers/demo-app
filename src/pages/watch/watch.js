import React, { useContext, useEffect, useState } from "react";
import { loginContext } from "../../context/LoginContext"
import { useHistory } from "react-router-dom";
import "./watch.scss";
import {Row, Col, Button} from "reactstrap";
import whiteWatch from "../../assets/Images/White Watch-2.png"
import blackWatch from "../../assets/Images/Black Watch-1.png"
import RightSideNav from "../../components/rightSideNav/rightSideNav";

const Watch = () => {
  let [showWhiteWatch, setShowWhiteWatch] = useState(true)
  
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
    <div className={'watch'}>
      <Row className={'header-row'}>
        <Col md={5}>
          <Row>
            <Col className={'header'}>
              Apple Watch
            </Col>
          </Row>
          <Row>
            <Col className={'change pb-5'}>
              Change starts within.
            </Col>
          </Row>
          <Row>
            <Col className={'info pt-5'}>
              Apple Watch Series 4. Fundamentally redesigned and re-engineered to help you be even more active, healthy, and connected.
            </Col>
          </Row>
          <Row>
            <Col className={'shipping pt-2'}>
              Starts shipping MM-DD-YYYY
            </Col>
          </Row>
        </Col>
        <Col md={1}>
        </Col>
        <Col md={6} className={'image-container'}>
          {
            showWhiteWatch &&
            <img src={whiteWatch} alt={'white watch'}/>
          }
          {
            !showWhiteWatch &&
            <img src={blackWatch} alt={'white watch'}/>
          }
        </Col>
      </Row>
      <Row>
        <Col md={3} className={'p-5 d-flex justify-content-center align-items-center'}>
          <div>
            <div className={'from'}>
              From $699
            </div>
            <div className={'buy'}>
              Buy Now &gt;
            </div>
          </div>
        </Col>
        <Col md={{offset: 3, size: 6}} className={'color-picker'}>
          <Row className={'d-flex justify-content-center align-items-center'}>
            <Col md={6}>
              <Row>
                <Col md={'auto'}>
                  <div className={`white d-flex justify-content-center align-items-center ${showWhiteWatch && 'selected'}`}>
                    <Button onClick={() => {setShowWhiteWatch(true)}} className={'mb-3'}/>
                  </div>
                  <div className={'d-flex justify-content-center align-items-center'}>
                    White
                  </div>
                </Col>
                <Col md={'auto'}>
                  <div className={`black d-flex justify-content-center align-items-center ${!showWhiteWatch && 'selected'}`}>
                    <Button onClick={() => {setShowWhiteWatch(false)}} className={'mb-3'}/>
                  </div>
                  <div className={'d-flex justify-content-center align-items-center'}>
                    Black
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <RightSideNav/>
    </div>
  );
}

export default Watch;