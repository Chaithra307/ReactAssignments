import React from 'react'

const Hoc1 = (WrappedComponent) => {
  return (()=>{
    return <WrappedComponent data="otta"/>
  }
)}

export default Hoc1