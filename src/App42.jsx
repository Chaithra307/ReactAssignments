import React,{useState,useEffect} from 'react'

const App42 = () => {
    let[userData,setUserData]=useState([])
    useEffect(()=>{
        let fetchData=async()=>{
            let data=await window.fetch("https://api.github.com/users")
            let finalData=await data.json()
            setUserData(finalData)
        }
        fetchData()
    },[])

        return (
            <div>{userData.map((x,index)=>{
                return(
                    <li key={x.id}>{x.login}</li>
                )
            })}
            </div>
          )
}

export default App42