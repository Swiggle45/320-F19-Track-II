import React from 'react';
import { Col, Row } from 'react-bootstrap';

class AboutUs extends React.Component{
    
    constructor(){
        super();
        this.state = {
            description: ''
        };
    }

    componentWillMount(){
        this.setState({description: 'OrchardWatch, defender of apples, slayer of applescap, your friendly neighborhood hero!'});
    }

    render(){
        return(
            <div>
                <Row>
                <Col md='8'>
                    <p>{this.state.description}</p>
                </Col>
                <Col>
                    <p>This is where the Tweets go!</p>
                </Col>
                </Row>
            </div>
        );
    }

}

export default AboutUs;