import React from 'react'
import Child from './Child'

const Parent = (props) => {
  return (
    <>
   <Child data={props.data}/>
   </>
  )
}

export default Parent