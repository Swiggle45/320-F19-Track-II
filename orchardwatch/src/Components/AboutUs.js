import React from "react";
import { Col, Row, Button } from "react-bootstrap";

class AboutUs extends React.Component {
  constructor() {
    super();
    this.state = {
      description: "",
      editting: false
    };
  }

  componentWillMount() {
    this.setState({
      description:
        "OrchardWatch, defender of apples, slayer of applescab, your friendly neighborhood hero!"
    });
  }

  render() {
    var tweets = <p>This is where the Tweets go!</p>;
    if (this.props.user === "researcher") {
      var edit = (
        <Button
          onClick={() => {
            this.setState({ editting: true });
          }}
        >
          Edit Description
        </Button>
      );
      if (this.state.editting)
        edit = (
          <div>
            <Button onClick={() => {}}>Save</Button>
            <Button
              onClick={() => {
                this.setState({ editting: false });
              }}
            >
              Cancel
            </Button>
          </div>
        );
      return (
        <div>
          <Row>
            <Col md="8">
              <Row>
                <Col></Col>
                <Col>{edit}</Col>
                <Col></Col>
              </Row>
              <br></br>
              <p>{this.state.description}</p>
            </Col>
            <Col>{tweets}</Col>
          </Row>
        </div>
      );
    } else {
      return (
        <div>
          <Row>
            <Col md="8">
              <p>{this.state.description}</p>
            </Col>
            <Col>{tweets}</Col>
          </Row>
        </div>
      );
    }
  }
}

export default AboutUs;
