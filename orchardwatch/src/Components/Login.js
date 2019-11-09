import React from "react";
import { Form, Button, Col } from "react-bootstrap";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      validated: false
    };
  }

  render() {
    return (
      <div>
        <Form validated={this.state.validated} onSubmit={this.validate}>
          <Form.Row>
            <Col></Col>
            <Col>
              <Form.Group controlId="formEmail">
                <Form.Control
                  required
                  type="email"
                  placeholder="Email Address"
                  size="md"
                />
              </Form.Group>
            </Col>
            <Col></Col>
          </Form.Row>
          <Form.Row>
            <Col></Col>
            <Col>
              <Form.Group controlId="formPassword">
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  size="md"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
            <Col></Col>
          </Form.Row>
        </Form>
      </div>
    );
  }

  validate = e => {
    if (e.currentTarget.checkValidity()){
        // send to Lambdas and wait for authToken upon successful validation or ...
        // wrong password
    }
    else {
      e.preventDefault();
      e.stopPropagation();
    }
  };
}

export default Login;
