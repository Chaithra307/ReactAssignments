import React from 'react'
import CreatePost from './components/CreatePost'
import ViewPost from './components/ViewPost'
import UpdatePost from './components/UpdatePost'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
const App43 = () => {
  return (
    <div>
      <Router>
       <Routes>
          <Route path="/" element={<CreatePost/>}/>
          <Route path="/viewposts" element={<ViewPost/>}/>
          <Route path="/updateposts/:id" element={<UpdatePost/>}/>
       </Routes>
      </Router>
    </div>
  )
}
export default App43