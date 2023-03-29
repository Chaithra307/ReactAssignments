import React,{useState,useEffect} from 'react'
const App39 = () => {
    let[count,setCount]=useState("")
    useEffect(()=>{
       document.title=`you clicked ${count} times`
    },[count])
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>{
            setCount(count++)
        }}>Increment</button>
    </div>
  )
}

export default App39