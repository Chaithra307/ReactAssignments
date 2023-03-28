import React,{useState} from 'react'

const App35 = () => {
    let[user,SetUser]=useState()
    let[pass,SetPass]=useState()
    let handleSubmit=(e)=>{
        e.preventDefault()
        console.log({user,pass})
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label><br/>
        <input type="text" id="username" onChange={(e)=>{SetUser({username:e.target.value})
                 }}/><br/>
        <label htmlFor="password">Password</label><br/>
        <input type="password" id="password" onChange={(e)=>{SetPass({password:e.target.value})
                 }}/><br/>
        <button>Submit</button>
        </form>
    </div>
  )
}

export default App35