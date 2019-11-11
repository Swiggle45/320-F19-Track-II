import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

class Observations extends React.Component {
  constructor() {
    super();
    this.state = {
      postObservations: true
    };
  }

  render() {
    var observations;
    if (this.state.postObservations) {
      observations = (
        <div>
          <Row>
            <Col md="2" />
            <Col>
              <Form>
                <Form.Group>
                  <Form.Group controlId="ObservationTitle">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Observation Title"
                    />
                  </Form.Group>
                </Form.Group>
                <Form.Group>
                  <Form.Group controlId="Observation Description">
                    <Form.Control
                      required
                      as="textarea"
                      rows="5"
                      placeholder="Observation Description/Comments"
                    />
                  </Form.Group>
                </Form.Group>
                <Button onClick={() => {}} block>Upload Images</Button>
                <br></br>
                <br></br>
                <Button onClick={() => {}} block>Submit Observations</Button>
              </Form>
            </Col>
            <Col md="2" />
          </Row>
        </div>
      );
    }
    else {
        observations = <div>
            {/* pull observations from Lambdas */}
        </div>
    }
    var switchViews;
    if (this.state.postObservations) {
      switchViews = (
        <Button
          onClick={() => {
            this.setState({ postObservations: false });
          }}
        >
          View Observations
        </Button>
      );
    } else {
      switchViews = (
        <Button
          onClick={() => {
            this.setState({ postObservations: true });
          }}
        >
          Post Observations
        </Button>
      );
    }
    if (this.props.user === "researcher") {
      return (
        <div>
          {switchViews}
          <br></br>
          <br></br>
          {observations}
        </div>
      );
    } else {
      return <div>{observations}</div>;
    }
  }
}

export default Observations;
