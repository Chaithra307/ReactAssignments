import React,{useState} from "react";
import { faker } from "@faker-js/faker";
const App19 = () => {
    let[img,setImg]=useState(faker.image.avatar())
    let handleChange=()=>{
        setImg(faker.image.avatar())
    }

  return (
    <div>
        <img src={img} alt=""/>
        <button onClick={handleChange}>change</button>
    </div>
  )
}

export default App19

