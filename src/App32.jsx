import React, { Component,createRef } from 'react';

class App32 extends Component {
    constructor(){
        super()
        this.userRef=createRef()
        this.passRef=createRef()
    }
    handleSubmit=(e)=>{e.preventDefault()
        let username=this.userRef.current.value
        let password=this.passRef.current.value
        console.log({username,password})}
    render() {
        return (
            <div>
              <form action="" onClick={this.handleSubmit}>
              <label htmlFor="username">Username</label><br/>
              <input type="text" id="username"ref={this.userRef}/><br/>
              <label htmlFor="password">Password</label><br/>
              <input type="text" id="password" ref={this.passRef}/><br/>
              <button >Submit</button>
              </form>
            </div>
        );
    }
}

export default App32;
