import React,{useState,useEffect} from 'react'

const App40 = () => {
    let[width,setWidth]=useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            setWidth(window.innerWidth)
        })
    },[width])
  return (
    <div>{width}</div>
  )
}

export default App40