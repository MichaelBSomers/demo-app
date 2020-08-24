import React from "react";
import { useHistory } from "react-router-dom";
import {Row, Col } from "reactstrap";
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons'
import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import "./rightSideNav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HOME_NAV_ROUTES } from "../../pages/home/home";

const RightSideNav = () => {
const history = useHistory();

  return (
    <div className={'right-side-nav d-flex align-items-center'}>
        <div className={'link-container'}>
            <Row className={'pb-4'}>
                <Col className={'text-center'}>
                    <div>
                    <FontAwesomeIcon icon={faMobileAlt} size={'2x'} onClick={() => {history.push(HOME_NAV_ROUTES.iPhone)}}/>
                    </div>
                </Col>
            </Row>
            <Row className={'pb-4'}>
                <Col className={'text-center'}>
                    <FontAwesomeIcon icon={faLaptop} size={'2x'} onClick={() => {history.push(HOME_NAV_ROUTES.macBook)}}/>
                </Col>
            </Row>
            <Row className={'pb-4'}>
                <Col className={'text-center'}>
                    {/* Don't own Font-awesome Pro. using clock as placeholder instead of watch. */}
                    <FontAwesomeIcon icon={faClock} size={'2x'} onClick={() => {history.push(HOME_NAV_ROUTES.watch)}}/>
                </Col>
            </Row>
        </div>
    </div>
  );
}

export default RightSideNav;