import './index.css'
import { useState } from 'react'

import React from 'react'

function App() {
  let [color, setcolor]=useState("olive")

  function red() {
    console.log("red");
    
    setcolor("red")
  }
  return (
    <>
      <div className='w-full h-screen duration-100' 
      style={{background:color}}>
        <div className="fixed  right-0 bg-white w-26 p-4 shadow-lg m-5 rounded-xl">
  <button className="bg-red-600 text-white p-2 rounded-xl m-2" style={{background:"red"}} onClick={()=>setcolor("red")} >
    red
  </button>
  <button className="bg-green-600 text-white p-2 rounded-xl m-2" style={{background:"green"}} onClick={()=>setcolor("green")} >
    green
  </button>
  <button className="bg-orange-600 text-white p-2 rounded-xl m-2" style={{background:"orange"}} onClick={()=>setcolor("orange")}>
    orange
  </button>
  <button className="bg-blue-600 text-white p-2 rounded-xl m-2" style={{background:"blue"}} onClick={()=>setcolor("blue")}>
    blue
  </button>
  <button className="bg-pink-600 text-white p-2 rounded-xl m-2" style={{background:"pink"}} onClick={()=>setcolor("pink")}>
    pink
  </button>
  <button className="bg-gray-600 text-white p-2 rounded-xl m-2" style={{background:"gray"}} onClick={()=>setcolor("gray")}>
    gray
  </button>
  <button className="bg-yellow-600 text-white p-2 rounded-xl m-2" style={{background:"yellow"}} onClick={()=>setcolor("yellow")}>
    yellow
  </button>
  <button className="bg-indigo-600 text-white p-2 rounded-xl m-2" style={{background:"indigo"}} onClick={()=>setcolor("indigo")}>
    indigo
  </button>
</div>

      </div>
    </>
  )
}

export default App

  