import React, { Component } from 'react';
import JSON from './Users.json'
import Users from './Users.jsx';

class App16 extends Component {
    constructor(){
        super()
        this.state={
            json:JSON
        }
    }
    render() {
        return (
            <>
            <Users data={this.state.json}/>
            </>
        );
    }
}

export default App16;
