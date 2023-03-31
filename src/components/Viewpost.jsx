import React,{useState,useEffect} from 'react'
import axiosInstance from '../helpers/axiosInstance'
const Viewpost = () => {
  let[data,setData]=useState([])
    useEffect(()=>{
      let fetchData=async()=>{
        let{data}=await axiosInstance.get('/posts')
        setData(data)
      }
      fetchData()
    },[])
  return (
    <div style={{display:"flex"}}>
      {data.map((x)=>{
        return(
          <div style={{border:"2px solid black",width:"20%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
           <h1>{x.coursename}</h1>
           <h2>{x.authorname}</h2>
          </div>
        )
      })}
    </div>
  )
}
export default Viewpost