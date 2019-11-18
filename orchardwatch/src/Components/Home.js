import React from 'react';
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
                <p>This is the Home page!</p>
                <p>Map:</p>
                <Map/>
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
            <div style={{ height: '100vh', width: '100%' }}>
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