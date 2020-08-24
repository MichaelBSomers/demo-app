import React, { useContext, useEffect, useState } from "react";
import { loginContext } from "../../context/LoginContext"
import { useHistory } from "react-router-dom";
import "./macbook.scss";
import {Row, Col, Button, Input} from "reactstrap";
import macbookImg from "../../assets/Images/shutterstock_-1.png"
import shutterstock from "../../assets/Images/shutterstock_-2@2x.png"



import RightSideNav from "../../components/rightSideNav/rightSideNav";

const Macbook = () => {
  let [email, setEmail] = useState('')
  
  const loginState = useContext(loginContext)
  const history = useHistory();
  useEffect(() => {
    console.log(loginState.state)
    if(!loginState.state.loggedIn) {
        history.push("/");
    }
  })

  return (
    <div className={'macbook'}>
      <Row className={'header-row'}>
        <Col lg={5} className={'header-info'}>
          <Row>
            <Col>
              <div>
                <h3>MacBook Pro</h3>
              </div>
              <div>
                <h5>
                  Starts shipping MM-DD-YYYY
                </h5>
              </div>
            </Col>
          </Row>
          <Row className={'pb-5'}>
            <Col>
              <div>
                <h1>
                  More power.
                </h1>
              </div>
              <div>
                <h1>
                  More pro
                </h1>
              </div>
            </Col>
          </Row>
          <Row className={'pt-3'}>
            <Col md={'auto'}>
              <div>
                <h4>
                  8-core
                </h4>
              </div>
              <div>
                <h2>
                  Intel processor
                </h2>
              </div>
            </Col>
            <Col>
              <div>
                <h4>
                  32GB
                </h4>
              </div>
              <div>
                <h2>
                  Memory
                </h2>
              </div>
            </Col>
          </Row>
        </Col>
        <Col>
          {/* I don't have access to photoshop to remove the background and create a gradient. */}
          <img src={macbookImg} alt={'shutterstock'}/>
        </Col>
      </Row>
      <Row className={'footer-info'}>
        <Col className={'d-flex d-lg-none justify-content-center align-items-center subscribe p-5 mr-5'}>
          <div className={'wrapper py-4 px-md-0 px-lg-5'}>
            <Row className={'pb-5'}>
              <Col>
                <h2>
                  <div className={'sub'}>Subscribe Now</div>
                </h2>
              </Col>
            </Row>
            <Row className={'subscribe'}>
              <Col md={8}>
                <Input block type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} required id='email' maxLength={35} placeholder={'Enter the email address'}/> 
              </Col>
              <Col md={4}>
                <Button className={'submit-btn p-2'} variant="danger" size="md" block type="submit">
                  Subscribe
                </Button> 
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={3} className={'d-flex justify-content-center pt-5'}>
          <h3>
            Buy Now &gt;
          </h3>
        </Col>
        <Col md={'auto'} className={'d-flex justify-content-center align-items-end pr-0'}>
          <div className={'shutterstock-image-wrapper'}>
            <img src={shutterstock} alt={'shutterstock'}/>
          </div>
        </Col>
        <Col className={'d-none d-lg-flex justify-content-center align-items-center subscribe p-5 mr-5'}>
          <div className={'wrapper py-4 px-md-0 px-lg-5'}>
            <Row className={'pb-5'}>
              <Col>
                <h2>
                  <div className={'sub'}>Subscribe Now</div>
                </h2>
              </Col>
            </Row>
            <Row className={'subscribe'}>
              <Col md={8}>
                <Input block type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} required id='email' maxLength={35} placeholder={'Enter the email address'}/> 
              </Col>
              <Col md={4}>
                <Button className={'submit-btn p-2'} variant="danger" size="md" block type="submit">
                  Subscribe
                </Button> 
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <RightSideNav/>
    </div>
  );
}

export default Macbook;