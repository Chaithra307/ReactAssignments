import React from 'react'
import json from '../userdata.json'
import Films from './Films';
import "./global.css"

const App10 = () => {
  return (
    <div>
    <Films payload={json}/>
    </div>
  )
}

export default App10