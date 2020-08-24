import React, { useContext, useEffect, useState } from "react";
import { loginContext } from "../../context/LoginContext"
import { useHistory } from "react-router-dom";
import "./iPhone.scss";
import {Row, Col} from "reactstrap";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import iphonePick from "../../assets/Images/Iphone 1@2x.png"
import iphonePickBack from "../../assets/Images/apple-iphonexs-max-gold-back-2@2x.png"
import appleIphonexs from "../../assets/Images/apple-iphonexs-max-gold.png"
import appleIphonexsBack from "../../assets/Images/apple-iphonexs-max-gold-back-1.png"


import RightSideNav from "../../components/rightSideNav/rightSideNav";

const IPhone = () => {
  const loginState = useContext(loginContext)
  const history = useHistory();
  let [showFrontPhone, setShowFrontPhone] = useState(true)


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
          <Col md={7} className={'info-container pb-md-5 h-25'}>
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
            <Row className={'d-none d-lg-block no-background'}>
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
                        <div className={'image-wrapper'} onClick={() => {setShowFrontPhone(true)}}>
                          <img src={appleIphonexs} alt={'appleIphonexs'} className={'appleIphonexs'}/>
                        </div>
                      </Col>
                      <Col md={'auto'}>
                        <div className={'image-wrapper'} onClick={() => {setShowFrontPhone(false)}}>
                          <img src={appleIphonexsBack} alt={'appleIphonexsBack'} className={'appleIphonexsBack'}/>
                        </div>
                      </Col>
                    </Row>
                    <Row className={'d-none d-md-flex justify-content-center pt-3'}>
                      <Col md={'auto'} className={showFrontPhone ? 'red-bar pr-0' : 'gray-bar pl-0'}>
                      </Col>
                      <Col md={'auto'} className={showFrontPhone ? 'gray-bar pl-0' : 'red-bar pr-0'}>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            
          </Col>
          <Col md={5} className={'d-flex align-items-center Iphone12x-container'}>
            {
              showFrontPhone ? 
              <img src={iphonePick} alt={'Iphone1@2x'} className={'Iphone12x m-auto'}/>
              :
              <img src={iphonePickBack} alt={'Iphone1@2x back'} className={'Iphone12x m-auto'}/>
            }
          </Col>
          <Row className={'m-auto d-flex d-lg-none justify-content-center'}>
            <Col xs={'auto'}>
              <div className={'image-wrapper'} onClick={() => {setShowFrontPhone(true)}}>
                <img src={appleIphonexs} alt={'appleIphonexs'} className={'appleIphonexs'}/>
              </div>
            </Col>
            <Col xs={'auto'}>
              <div className={'image-wrapper'} onClick={() => {setShowFrontPhone(false)}}>
                <img src={appleIphonexsBack} alt={'appleIphonexsBack'} className={'appleIphonexsBack'}/>
              </div>
            </Col>
          </Row>
          <Row className={'d-none d-md-flex justify-content-center pt-3'}>
            <Col xs={'auto'} className={showFrontPhone ? 'red-bar pr-0' : 'gray-bar pl-0'}>
            </Col>
            <Col xs={'auto'} className={showFrontPhone ? 'gray-bar pl-0' : 'red-bar pr-0'}>
            </Col>
          </Row>
        </Row>
      </div>
      <RightSideNav/>
    </div>
  );
}

export default IPhone;