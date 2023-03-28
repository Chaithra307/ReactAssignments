import React from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",height:"75px",border:"2px solid red"}}>
        <div>
            <ol style={{display:"flex",justifyContent:"space-around",width:"400px"}}>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/Login">Login</Link>
                </li>
                <li>
                <Link to="/Signup">Signup</Link>
                </li>
                <li>
                <Link to="/About">About us</Link>
                </li>
            </ol>
            </div>


    </div>
  )
}

export default Nav