import React, { Component } from 'react';

class App20 extends Component {
    constructor()
    {
        super()
        this.state={
            username:"upendra"
        }
    }
    componentDidMount()
        {
            let btn=document.querySelector('button')
            btn.addEventListener('click',()=>{
                this.setState({username:this.setState.username="kgf"})
            })
        }

    render() {
        return (
            <>
            <div>{this.state.username}</div>
            <button>change</button>
            </>
        );
    }
}

export default App20;
