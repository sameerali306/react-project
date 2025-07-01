
import './index.css'

import React, { useEffect, useState } from 'react'

function App() {
  let [time,settime]=useState(new Date())

  useEffect(()=>{
    setInterval(() => {
      settime(new Date)
    }, 1000);
  })
  
  const Hours=time.getHours()
  // const minutes=time.getMinutes()
  // const second=time.getSeconds()

  const isNight=Hours >=19 ||Hours<6
  
  return (
    <div>
      <div className="clock-container">
        <h1 className='time'>{time.toLocaleTimeString()}</h1>
        <p className='greet'>{isNight ? "Good Night":"Good Day"}</p>
        <p className='date'> {time.toLocaleDateString()}</p>

      </div>
    </div>
  )
}

export default App
