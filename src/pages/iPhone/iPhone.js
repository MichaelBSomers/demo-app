import React, { useContext, useEffect } from "react";
// import {Container} from "reactstrap";
// import SignInComponent from "../../components/signInComponent/SignInComponent";
import { loginContext } from "../../context/LoginContext"
// import { usersContext } from "../../context/UsersContext";
import { useHistory } from "react-router-dom";
import "./iPhone.scss";
import {Row, Col, Button} from "reactstrap";
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HOME_NAV_ROUTES } from "../home/home";

import iphonePick from "../../assets/Images/Iphone 1@2x.png"
import appleIphonexs from "../../assets/Images/apple-iphonexs-max-gold.png"
import appleIphonexsBack from "../../assets/Images/apple-iphonexs-max-gold-back-1.png"


import RightSideNav from "../../components/rightSideNav/rightSideNav";

const IPhone = () => {
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
    <div className={'i-phone'}>
      <div className={'i-phone-container'}>
        <Row>
          <Col md={7} className={'info-container pb-5 h-25'}>
            <div className={'i-phone-apple-container d-flex align-items-center justify-content-center'}>
                <FontAwesomeIcon icon={faAppleAlt} size={'10x'} classname={'apple'}/>
            </div>
            <div className={'background'}>
              <Row className={'pb-4'}>
                <Col md={6} className={'pl-4'}>
                  <h3>
                    iPhone
                  </h3>
                </Col>
              </Row>
              <Row className={'pb-5'}>
                <Col md={8}>
                  <h1>
                    The ultimate iPhone
                  </h1>
                </Col>
              </Row>
              <Row className={'pb-3'}>
                <Col md={6}>
                  <h4>
                    The future is here. Join the iPhone Upgrade Program to get the latest iPhone - NOW!
                  </h4>
                </Col>
              </Row>
              <Row className={'pb-5'}>
                <Col md={6}>
                  <h5>
                    Starts shipping MM-DD-YYYY
                  </h5>
                </Col>
              </Row>
            </div>
            <Row className={'no-background'}>
              <Col>
                <Row>
                  <Col className={'d-flex align-items-center justify-content-center'}>
                    <div>
                      <div className={'from'}>
                        From $699
                      </div>
                      <div className={'buy'}>
                        Buy Now &gt;
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <Row className={'d-flex justify-content-center'}>
                      <Col md={'auto'}>
                        <img src={appleIphonexs} alt={'appleIphonexs'} className={'appleIphonexs'}/>
                      </Col>
                      <Col md={'auto'}>
                        <img src={appleIphonexsBack} alt={'appleIphonexsBack'} className={'appleIphonexsBack'}/>
                      </Col>
                    </Row>
                    <Row className={'d-flex justify-content-center pt-3'}>
                      <Col md={'auto'} className={'red-bar pr-0'}>
                      </Col>
                      <Col md={'auto'} className={'gray-bar pl-0'}>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            
          </Col>
          <Col md={5} className={'d-flex align-items-center Iphone12x-container'}>
            <img src={iphonePick} alt={'Iphone1@2x'} className={'Iphone12x'}/>
          </Col>
        </Row>
      </div>
      <RightSideNav/>
    </div>
  );
}

export default IPhone;