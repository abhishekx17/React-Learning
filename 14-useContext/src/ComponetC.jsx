import React, { useContext } from 'react'
import ComponetD from './ComponetD'
import { UserContext } from './ComponetA'

const ComponetC = () => {

    const user = useContext(UserContext)

  return (
    <div className='box' >
      <h2> {`hlo again ${user}`} </h2>
      <ComponetD/>
    </div>
  )
}

export default ComponetC
