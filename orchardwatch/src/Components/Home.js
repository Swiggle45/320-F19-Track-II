import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';

class Home extends React.Component{
    constructor(){
        super();
        this.state = {

        };
    }

    render(){
        return(
            <div>
                <Row>
                    <Col xs={1}/>
                    <Col xs={2} xsOffset={1}>
                        <Button >Temperature</Button>
                        <Button >Humidity</Button>
                        <Button >Solar Radiation</Button>
                        <Button >Soil Moisture</Button>
                        <Button >Leaf Wetness</Button>
                        <Button >Rainfall</Button>
                        <Button >Wind Speed</Button>
                        <Button >Wind Direction</Button>
                    </Col>
                    <Col>
                        <Map/>
                    </Col>
                    <Col xs={1}/>
                </Row>
            </div>
        );
    }

}



const Test = ({ text }) => <div>{text}</div>;

class Map extends React.Component{
    static defaultProps = {
        center: {
            lat: 42.253659,
            lng: -72.359804
        },
        zoom: 18
    }
    constructor(){
        super();
        this.state = {

        };
    }

    render(){
        return(
            <div style={{ height: '75vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: 'AIzaSyAtet06EefOdjCUF-YFsWceI6DMPUt54O4',
                        language: 'en',
                    }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    onChildMouseEnter={this.onChildMouseEnter}
                    onChildMouseLeave={this.onChildMouseLeave}
                >
                    <Test
                        lat={42.253659}
                        lng={-72.359804}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Home;