import React from "react";
import { Col, Row, Button, Form } from "react-bootstrap";
import { Timeline } from "react-twitter-widgets";

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
    //var tweets = <p>This is where the Tweets go!</p>;
    let tweets = (
      <Timeline
        dataSource={{
          sourceType: "profile",
          screenName: "iamdevloper"
        }}
        options={{
          username: "iamdevloper",
          height: "400",
          width: "200"
        }}
        onLoad={() => console.log("twitter timeline loaded!")}
      />
    );
    if (this.props.user === "researcher") {
      var edit = (
        <div>
          <Button
            onClick={() => {
              this.setState({ editting: true });
            }}
          >
            Edit Description
          </Button>
          <br></br>
          <br></br>
          {this.state.description}
        </div>
      );
      if (this.state.editting)
        edit = (
          <div>
            <Row>
              <Col></Col>
              <Col>
                <Button onClick={this.updateDescription}>Save</Button>
                <Button
                  onClick={() => {
                    this.setState({ editting: false });
                  }}
                >
                  Cancel
                </Button>
                <br></br>
                <br></br>
                <Form>
                  <Form.Group controlId="editDescription">
                    <Form.Control
                      as="textarea"
                      rows="5"
                      defaultValue={this.state.description}
                    ></Form.Control>
                  </Form.Group>
                </Form>
              </Col>
              <Col></Col>
            </Row>
          </div>
        );
      return (
        <div>
          <Row>
            <Col md="8">{edit}</Col>
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

  updateDescription(event) {
    // send to lambdas
    console.log(document.getElementById("editDescription").value);
  }
}

export default AboutUs;
