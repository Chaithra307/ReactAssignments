import React from 'react'

const App31 = () => {
  return (
    <div>
        <form action="">
                    <label htmlFor="username">Username</label><b/>
                    <input type="text" id="username"/><br/>
                    <label htmlFor="password">Password</label><b/>
                    <input type="text" id="password"/><br/>
                    <button onClick={(e)=>{e.preventDefault()
                    let username=document.getElementById("username").value
                    let password=document.getElementById("password").value
                    console.log({username,password});}}>Submit</button>
        </form>
    </div>
  )
}

export default App31