import React, { Component,createRef } from 'react';

class App25 extends Component {
    constructor(){
        super()
        this.state={company:"HP"}
        this.spanRef=createRef()
        this.btnRef=createRef()

    }
    render() {
        return (
            <div>
                <span ref={this.spanRef}>{this.state.company}</span> <br/>
                <button ref={this.btnRef} onClick={()=>{
                    this.setState({company:"HCL"})
                    this.spanRef.current.style.color="green"
                    this.spanRef.current.style.border="2px solid black"
                    this.spanRef.current.style.padding="2px"
                    this.spanRef.current.style.margin="15px"
                    this.btnRef.current.style.color="blue"
                    this.btnRef.current.style.backgroundColor="yellow"
                    this.btnRef.current.style.borderRadius="20%"
                }}> change company </button>

            </div>
        );
    }
}

export default App25;
