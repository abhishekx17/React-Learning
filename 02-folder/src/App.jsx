import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
     <Card user='Abhi' age={19} img='https://images.unsplash.com/photo-1733325154702-5d5e5d53b6ad?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687' />
     <Card user='Ravi' age={20} img='https://images.unsplash.com/photo-1742145792541-172c7ef6d0d1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764'/>

    </div>
  )
}

export default App
