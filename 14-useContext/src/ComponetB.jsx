import React, { useContext } from 'react'
import ComponetC from './ComponetC'
import { UserContext } from './ComponetA'

const ComponetB = () => {

    const user = useContext(UserContext)

  return (
    <div className='box' >
     
      <h2> {`hlo ${user}`} </h2>
      <ComponetC />
    </div>
  )
}

export default ComponetB
