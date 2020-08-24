import React from "react";
import { useHistory } from "react-router-dom";
import {Row, Col, Button } from "reactstrap";

import "./topNav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAppleAlt } from "@fortawesome/free-solid-svg-icons";
import { HOME_NAV_ROUTES } from "../../pages/home/home";

import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'

const TopNav = () => {
const history = useHistory();

  return (
    <div className="top-nav d-flex justify-content-between">
        <div className={'apple-container d-flex align-items-center justify-content-center'}>
            <FontAwesomeIcon icon={faAppleAlt} size={'4x'} classname={'apple'}/>
        </div>
        <div className={'link-container d-flex align-items-center'}>
            <Row className={'pr-lg-5 d-flex align-items-center justify-content-end'}>
                <Col md="auto" className={'d-none d-md-block'}>
                    <div className="link" onClick={() => {history.push(HOME_NAV_ROUTES.iPhone)}}>
                        iPhone
                    </div>
                </Col>
                <Col md="auto" className={'d-none d-md-flex'}>
                    <div className="link" onClick={() => {history.push(HOME_NAV_ROUTES.macBook)}}>
                        MacBook Pro
                    </div>
                </Col>
                <Col md="auto" className={'d-none d-md-flex'}>
                    <div className="link" onClick={() => {history.push(HOME_NAV_ROUTES.watch)}}>
                        Watch
                    </div>
                </Col>

                <Col xs="auto" className={'d-flex d-md-none'}>
                    <FontAwesomeIcon icon={faMobileAlt} onClick={() => {history.push(HOME_NAV_ROUTES.iPhone)}}/>
                </Col>
                <Col xs="auto" className={'d-flex d-md-none'}>
                    <FontAwesomeIcon icon={faLaptop} onClick={() => {history.push(HOME_NAV_ROUTES.macBook)}}/>
                </Col>
                <Col xs="auto" className={'d-flex d-md-none'}>
                    <FontAwesomeIcon icon={faClock} onClick={() => {history.push(HOME_NAV_ROUTES.watch)}}/>
                </Col>

                <Col xs={'auto'} sm={'auto'}>
                    <Button className={'px-sm-3 px-md-5'}>
                        Notify Me
                    </Button>
                </Col>
            </Row>
        </div>
    </div>
  );
}

export default TopNav;