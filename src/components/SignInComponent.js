import React, { Component } from "react";
import {Container, Row, Col} from "reactstrap";

import "./css/signIn.scss";

export default class signIn extends Component {

  render() {
    return (
      <Row>
        <Col md={'auto'}>
          Sign In
        </Col>
      </Row>
    );
  }
}