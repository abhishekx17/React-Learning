import React, { useContext } from 'react'
import { UserContext } from './ComponetA'

const ComponetD = () => {

    const user = useContext(UserContext)

  return (
    <div className='box' >
      <h1> {`by ${user}`} </h1>
      
    </div>
  )
}

export default ComponetD
