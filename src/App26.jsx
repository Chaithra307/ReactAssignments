import React,{useRef} from 'react'

const App26 = () => {
    let h1Ref=useRef()
    let handleChange=()=>{
        h1Ref.current.style.color="red"
    }
  return (
    <div>
        <h1 ref={h1Ref}>App Component</h1>
        <button onClick={handleChange}>change</button>

    </div>
  )
}

export default App26
