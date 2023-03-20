import React,{useRef,useState} from 'react'
import IMG from './picture.jpg'

const App27 = () => {
    let [photo,setPhoto]=useState(IMG)
    let [loading,setLoading]=useState(true)
    let imgRef=useRef()
    let handleChange=()=>{
        if(loading==true)
        {
            setLoading(!true)
            imgRef.current.style.borderRadius="25%"
            imgRef.current.style.border="2px solid green"

        }
        else{
            setLoading(!false)
            imgRef.current.style.borderRadius="0px"
            imgRef.current.style.border="none"
        }
     
    }
  return (
    <div>
        <img src={photo} alt="Butterfly" ref={imgRef} height="200px" width="200px"/>
        <button onClick={handleChange}>{loading? "ON":"OFF"}</button>
    </div>
  )
}

export default App27