import React, { Component } from 'react';

class App13 extends Component {
    constructor()
    {
        super()
        this.state={username:"raj",
                    password:"143"}
    }
    render() {
        return (
            <>
               <h2>{this.state.username}</h2>
               <h3>{this.state.password}</h3> 
            </>
        )
    }
}

export default App13;
