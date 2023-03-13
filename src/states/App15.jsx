import React, { Component } from 'react';

class App15 extends Component {
    state={subject:"REACT JS",
            skills:["HTML","CSS","JS"]
           }
    render() {
        return (
            <>
            <h1>{this.state.subject}</h1>
            <ul>{this.state.skills.map((x)=>{return<li>{x}</li>})}</ul>
            </>
        )
    }
}

export default App15;
