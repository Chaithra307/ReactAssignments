import React from 'react'
import { ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App23 = () => {
    let handleSubmit=()=>{
        toast.success("logged in",{position:toast.POSITION.TOP_CENTER})
        toast.info("information",{position:toast.POSITION.TOP_LEFT})
        toast.error("this is the error",{position:toast.POSITION.BOTTOM_RIGHT})
        toast.warning("danger warning",{position:toast.POSITION.BOTTOM_CENTER})
    }
  return (
    <div>
        <ToastContainer/>
        <button onClick={handleSubmit}>click for message</button>

    </div>
  )
}

export default App23