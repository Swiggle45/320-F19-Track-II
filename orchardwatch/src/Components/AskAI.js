import React from 'react';
import { Button } from 'react-bootstrap';

class AskAI extends React.Component{

    constructor(){
        super();
        this.state = {

        };
    }

    render(){
        return(
            <div>
                <p>This is the Ask AI page!</p>
                <Button onClick={() => {}}>Submit Image</Button>
            </div>
        );
    }

}

export default AskAI;