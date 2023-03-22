import React,{useRef} from 'react'

const App33 = () => {
    let userRef=useRef()
    let passRef=useRef()

   let handleSubmit=(e)=>{e.preventDefault()
        let username=userRef.current.value
        let password=passRef.current.value
        console.log({username,password})}
  return (
    <div>
        <form action="" onClick={handleSubmit}>
            <label htmlFor="username">Username</label><br/>
            <input type="text" id="username"ref={userRef}/><br/>
            <label htmlFor="password">Password</label><br/>
            <input type="text" id="password" ref={passRef}/><br/>
            <button >Submit</button>
        </form>
     </div>
  )
}
export default App33