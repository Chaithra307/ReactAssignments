import React, { Component } from 'react';

class App21 extends Component {
    constructor()
    {
        super()
        this.state={
            username:""
        }
    }
    componentDidMount()
        {
            let input=document.querySelector('input')
            input.addEventListener("keypress",(e)=>{
                this.setState({username:e.target.value})
            })
        }
    render() {
        return (
            <>
            <div>{this.state.username}</div>
            <input type="text"/>
            </>
        );
    }
}

export default App21;
