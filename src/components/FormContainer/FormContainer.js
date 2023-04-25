import Accordion from "react-bootstrap/Accordion";
import LoginForm from "../LoginForm/LoginForm";
import SigninForm from "../SigninForm/SigninForm";

import "./FormContainer.css";

function FormContainer() {
  return (
    <div className="containerDiv">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Log In</Accordion.Header>
          <Accordion.Body>
            <LoginForm />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Sign In</Accordion.Header>
          <Accordion.Body>
            <SigninForm />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FormContainer;
