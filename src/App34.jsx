import React, { Component } from 'react';

class App34 extends Component {
    constructor(){
        super()
        this.state={username:"",
                    password:""}
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state.username);
        console.log(this.state.password);
    }
    render() {
        return (
            <div>
                 <form action="" onSubmit={this.handleSubmit}>
                 <label htmlFor="username">Username</label><br/>
                 <input type="text" id="username" onChange={(e)=>{this.setState({username:e.target.value})
                 }}/><br/>
                 <label htmlFor="password">Password</label><br/>
                 <input type="password" id="password" onChange={(e)=>{this.setState({password:e.target.value})
                 }}/><br/>
                 <button>Submit</button>
                 </form>
            </div>
        )
    }
}

export default App34;
