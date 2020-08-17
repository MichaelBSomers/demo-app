import React, { Component } from "react";
import {Container, Row} from "reactstrap";

import "./css/signIn.scss";

export default class signIn extends Component {

  render() {
    return (
        <Container className={'sign-in'}>
          <Row>
            Sign In
          </Row>
        </Container>
    );
  }
}