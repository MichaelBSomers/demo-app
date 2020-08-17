import React, { Component } from "react";
import {Container, Row} from "reactstrap";

import "./css/signUp.scss";

export default class signUp extends Component {

  render() {
    return (
        <Container className={'home'}>
          <Row>
            Sign Up
          </Row>
        </Container>
    );
  }
}