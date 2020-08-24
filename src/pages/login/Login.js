import React, { useContext, useState } from "react";
import {Container} from "reactstrap";
import SignInComponent from "../../components/signInComponent/SignInComponent";
import { loginContext, loginContextActions } from "../../context/LoginContext"
import { usersContext, usersContextActions } from "../../context/UsersContext";
import { useHistory } from "react-router-dom";

import "./login.scss";

const Login = () => {
  const loginState = useContext(loginContext)
  const usersState = useContext(usersContext)
  const history = useHistory();

  let [showSignUp, setShowSignUp] = useState(false)
  let [registered, setRegistered] = useState(false)
  let [duplicateRegistration, setDuplicateRegistration] = useState(false)


  const submit = (value) => {
    setRegistered(false)
    setDuplicateRegistration(false)
    console.log('submit called')
    if(value.signIn) {
      signIn(value)
    } else {
      signUp(value)
    }
  }

  const signUp = (value) => {
    const findDuplicate = usersState.state.find((item) => {
      if(item.email === value.email){
        return true
      }
      return false
    })
    if(findDuplicate) {
      setDuplicateRegistration(true)
      return
    } else {
      usersState.dispatch({
        type: usersContextActions.SIGN_UP,
        value: {
          name: value.name,
          email: value.email,
          password: value.password
        }
      })
      setRegistered(true)
    }
  }

  const signIn = (value) => {
    const findDuplicate = usersState.state.find((item) => {
      if(item.email === value.email && item.password === value.password){
        return true
      }
      return false
    })
    if(findDuplicate){
      loginState.dispatch({
        type: loginContextActions.SIGN_IN, 
        value: {
          loggedIn: true,
          userName: value.name,
          userEmail: value.email
        }
      })
      history.push("/announcement");
    } else {
      // create fail
    }
    
  }

  console.log('loginState', loginState.state)
  

  return (
    <div className={'login'}>
      <Container>
        <SignInComponent 
          submit={submit} 
          showSignUp={showSignUp} 
          setShowSignUp={setShowSignUp} 
          registered={registered}
          duplicateRegistration={duplicateRegistration}
        />
      </Container>
    </div>
  );
}

export default Login;