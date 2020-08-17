import React, { Component } from "react";
import {Container, Row} from "reactstrap";

import "./css/signIn.scss";
import SignInComponent from "../../components/signInComponent/SignInComponent";

export default class signIn extends Component {

  render() {
    return (
      <div  className={'sign-in'}>
        <Container>
          <SignInComponent label={'Sign In'}/>
        </Container>
      </div>
    );
  }
}