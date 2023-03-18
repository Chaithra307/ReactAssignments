import React, { Component,createRef } from 'react';

class App24 extends Component {
    constructor(){
        super()
        this.state={name:"hello react"}
        this.h1Ref=createRef()
    }
    componentDidMount()
    {
        let h1=document.querySelector('h1')
        console.log(h1);
        console.log(this.h1Ref.current);
    }
    render() {
        return (
            <div>
                <h1 ref={this.h1Ref}>{this.state.name}</h1>

            </div>
        );
    }
}

export default App24;
