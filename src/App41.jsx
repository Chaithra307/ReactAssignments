import React,{useState,useEffect} from 'react'
const App41 = () => {
    let[userData,setUserData]=useState([])
    useEffect(()=>{
        window.fetch("https://api.github.com/users")
        .then((x)=>x.json())
        .then((data)=>setUserData(data))
        .catch((err)=>err)

    },[])
  return (
    <div>{userData.map((x,index)=>{
        return(
            <li key={index}>{x.login}</li>
        )
    })}
    </div>
  )
}

export default App41