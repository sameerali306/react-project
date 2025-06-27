import './App.css'
import React, { useState } from 'react'

function App() {
  let [counter,setcounter]=useState(0)
  function addnumber() {
   
   if (counter<20) {
   setcounter(counter+1)
    
   }
    
  }

  function removenumber() {
  if (counter>0) {
    setcounter(counter-1)
    
  }
    
  }
    function zeronumber() {
      setcounter(0)
    
  }
  return (
    <div>
      <h1>A good counter app from react</h1>
      <h2>Counter :{counter}</h2>

      <button onClick={addnumber}>Add Value</button>
      <button onClick={zeronumber}>zero Value</button>
      <button onClick={removenumber}>Remove Value</button>
    </div>
  )
}

export default App
