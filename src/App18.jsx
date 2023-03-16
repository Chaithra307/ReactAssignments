import React,{useState} from 'react'

const App18 = () => {
    let[count,setCount]=useState(0)
    let handleIncrement=()=>{
        setCount(count+1)
    }
    let handleDecrement=()=>{
        setCount(count-1)
    }
    let handleReset=()=>{
        setCount(0)
    }
    return (
        <div className='mainBlock'>
            <h1>{count}</h1>
            <div className='btnGroup'>
                <button onClick={handleIncrement}> + Increment </button>
                <button onClick={handleDecrement}> - Decrement </button>
                <button onClick={handleReset}> Reset </button>
            </div>
        </div>
  )
}

export default App18