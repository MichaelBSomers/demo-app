import React, { useState } from "react";
import {Row, Col, FormGroup, Label, Input, Button, Form} from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'

import "./signInComponent.scss";

const SignInComponent = ({submit, showSignUp = false, setShowSignUp = () => {}, registered = false, duplicateRegistration = false}) => {
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    submit({
      name,
      email,
      password,
      signUp: showSignUp,
      signIn: !showSignUp
    })
  }

  return (
    <div className={'sign-in-component'}>
      <Form onSubmit={onSubmit}>
        <Row>
          <Col md={6} lg={5} className={'sign-in-container p-5 m-auto'}>
            <Row className={'pb-4'}>
              <Col>
                <div className={'header text-center'}>
                  {showSignUp ? 'Sign-Up' : 'Sign-In'}
                </div>
              </Col>
            </Row>
            {
              (duplicateRegistration && showSignUp) &&
              <Row>
                <Col>
                  <div className={'duplicate-registration p-2 mb-3'}>
                    <FontAwesomeIcon icon={faExclamationTriangle}/>
                    <span className={'pl-3'}>User Already Exists!</span>
                  </div>
                </Col>
              </Row>
            }
            {
              (registered && showSignUp) &&
              <Row>
                <Col>
                  <div className={'registered p-2 mb-3'}>
                    <FontAwesomeIcon icon={faCheck}/>
                    <span className={'pl-3'}>Registered Successfully!</span>
                  </div>
                </Col>
              </Row>
            }
            { showSignUp &&
              <Row>
                <Col>
                  <FormGroup>
                    <Label required for='name' className={'label'}>Full Name</Label>
                    <Input type="text" value={name} onChange={(e) => {setName(e.target.value)}} required id='name' maxLength={35} placeholder={'John Doe'}/>
                  </FormGroup>  
                </Col>
              </Row>
            }
            <Row>
              <Col>
                <FormGroup>
                  <Label required for='email' className={'label'}>Email</Label>
                  <Input type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} required id='email' maxLength={35} placeholder={'user@email.com'}/>
                </FormGroup>  
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label required for='password' className={'label'}>Password</Label>
                  <Input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} required id='password' maxLength={35} placeholder={'************'} autoComplete='new-password'/>
                </FormGroup>  
              </Col>
            </Row>
            <Row>
              <Col lg={5} className={'m-auto'}>
                <Button className={'submit-btn p-2'} variant="danger" size="md" block type="submit">
                  {showSignUp ? 'Sign-Up' : 'Sign-In'}
                </Button> 
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
      <Row className={'pt-2'}>
        <Col md={5} className={showSignUp ? 'text-left m-auto' : 'text-right m-auto'}>
            <div className={'sign-footer'}>
              {
                !showSignUp ? 'Not registered? ' : 'Already registered? '
              }
              <span className={'sign-up-btn'} onClick={() => setShowSignUp(!showSignUp)}>
                {
                  showSignUp ? 'Sign-In' : 'Sign-Up'
                }
              </span>
            </div>
        </Col>
      </Row>
    </div>
  )
}

export default SignInComponent