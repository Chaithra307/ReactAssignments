import React,{useState,useRef} from 'react'
import VIDEO from './video.mp4'

const App29 = () => {
    let[video,setVideo]=useState(VIDEO)
    let [loading,setLoading]=useState(false)
    let videoRef=useRef()
    let playorpause=()=>{
        if(!loading)
        {
            setLoading(true)
            videoRef.current.play()
        }
        else
        {
            setLoading(false)
            videoRef.current.pause()
        }
    }
  return (
    <div>
        <video src={video} onClick={playorpause} ref={videoRef} height="250px" width="350px"/>
    </div>
  )
}

export default App29