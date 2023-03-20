import React,{useState} from 'react'
import eye from'./eye.webp'
const App28 = () => {
    let [password,setPassword]=useState(true)
    let showPassword=()=>{
       if(password==true)
       {
       setPassword(!true)
       }
       else
       {
        setPassword(!false)
       }
    }
  return (
    <div>
        <input type={password ? "text":"password"} name="" id="" />
        <img src={eye} alt="" height="20px" width="20px" onClick={showPassword}/>
    </div>
  )
}

export default App28
