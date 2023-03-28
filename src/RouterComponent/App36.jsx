import React from 'react'
import Nav from './Nav'
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Signup from './Signup'
import About from './About'
import PagenotFound from './PagenotFound'
const App36 = () => {
  return (
    <Router>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='*' element={<PagenotFound/>}/>
        </Routes>
    </Router>
  )
}

export default App36