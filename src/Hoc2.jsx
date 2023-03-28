import React from 'react'

const Hoc2 = (WrappedComponent) => {
    return (()=>{
        return <WrappedComponent data="paapa"/>
      }
    )}

export default Hoc2