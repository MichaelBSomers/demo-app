import React, { useContext, useEffect } from "react";
// import {Container} from "reactstrap";
// import SignInComponent from "../../components/signInComponent/SignInComponent";
import { loginContext } from "../../context/LoginContext"
// import { usersContext } from "../../context/UsersContext";
import { useHistory } from "react-router-dom";
import "./announcement.scss";
import {Row, Col, Button} from "reactstrap";
import Apple from "../../assets/Images/apple.png"

const Announcement = () => {
  const loginState = useContext(loginContext)
//   const usersState = useContext(usersContext)
  const history = useHistory();
  useEffect(() => {
    console.log(loginState.state)
    if(!loginState.state.loggedIn) {
        history.push("/");
    }
  })
  
  const enter = () => {
    history.push("/home/welcome");
  }

  return (
    <div className={'announcement m-auto'}>
        {/* <img src={Apple} alt="Logo" className={'apple-image'}/> */}
        <Row>
            <Col>
                <Button onClick={enter}>
                    Enter
                </Button>
            </Col>
        </Row>
    </div>
  );
}

export default Announcement;