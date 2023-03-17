import React, { Component } from 'react';

class App22 extends Component {
    constructor()
    {
        super()
        this.state={
            username:""
        }
    }
    render() {
        return (
            <>
            <h1>{this.state.username}</h1>
            <input type="text" onChange={(e)=>{
                this.setState({username:e.target.value})
            }}/>
                
            </>
        );
    }
}

export default App22;
