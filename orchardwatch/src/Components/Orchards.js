import React from 'react';
import './Orchards.css';
import { Form, Row, Col } from 'react-bootstrap';

class Orchards extends React.Component{
    
    constructor(){
        super();
        this.state = {
            orchards: [],
            selected: 0
        };
    }

    componentWillMount(){
        // fetch Orcahrds and their associated description from Lambdas
        var data = {orchards: [{name: 'CSO', description: 'CSO. Apples. Yay!'}, {name: 'Some Other Orchard', description: 'We have apples too! Woo!'}]};
        this.setState({orchards: data.orchards})
    }

    render(){
        var orchards = this.state.orchards.map((orchard, index) => {
            return(
                <option value={index}>{orchard.name}</option>
            );
        });
        return(
            <div>
                <Form>
                    <Row>
                    <Col md='2'></Col>
                    <Col>
                    <Form.Group>
                        <Form.Control as='select' onChange={(e) => {this.setState({selected: e.target.value})}}>
                            {orchards}
                        </Form.Control>
                    </Form.Group>
                    </Col>
                    <Col md='2'></Col>
                    </Row>
                </Form>
                <p>{this.state.orchards[this.state.selected].description}</p>
            </div>
        );
    }

}

export default Orchards;