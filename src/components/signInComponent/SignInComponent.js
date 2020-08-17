import React, { useState } from "react";
import {Row, Col, FormGroup, Label, Input, Button, Form} from "reactstrap";

import "./signInComponent.scss";

const SignInComponent = ({submit, signUp = false}) => {
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let [showSignUp, setShowSignUp] = useState(signUp)

  const onSubmit = () => {
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
      <Form submit={onSubmit}>
        <Row>
          <Col md={{offset: 3, size: 5}} className={'sign-in-container p-5'}>
            <Row className={'pb-5'}>
              <Col>
                <div className={'header text-center'}>
                  {showSignUp ? 'Sign-Up' : 'Sign-In'}
                </div>
              </Col>
            </Row>
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
                  <Input type="password" value={password} onChange={(e) => {setPassword(e.target.value)}} required id='password' maxLength={35} placeholder={'************'}/>
                </FormGroup>  
              </Col>
            </Row>
            <Row>
              <Col md={{offset: 4, size: 4}}>
                <Button className={'submit-btn'} variant="danger" size="md" block type="submit">
                  {showSignUp ? 'Sign-Up' : 'Sign-In'}
                </Button> 
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
      <Row className={'pt-2'}>
        <Col md={{offset: 3, size: 5}} className={showSignUp ? 'text-right' : 'text-left'}>
            <div>
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