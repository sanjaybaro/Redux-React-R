import React from 'react'
import { store } from '../Redux/store'

function Counter() {
  const {getState}=store
    
  return (
    <div>
      <h1>Counter : </h1>
      <button>ADD</button>
      <button>REDUCE</button>
    </div>
  )
}

export default Counter
