import React from 'react'

const Signup = () => {
  return (
    <>
    <h1>SIGNUP PAGE</h1>
    <label htmlFor='username'>Username</label><br/>
    <input type='text' id='username'/><br/>
    <label htmlFor='password'>Password</label><br/>
    <input type='password' id='password'/><br/>
    <button>submit</button>
    </>
  )
}

export default Signup