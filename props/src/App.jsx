
import './App.css'
import Card from './Component/Card';

import React from 'react'

function App() {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center">
      <h1 className="text-center text-white text-3xl bg-green-500 p-4 rounded-xl">Tailwind Test</h1>
      <Card  userName="sameer ali" btntext="Read Me"/>
      <Card userName="faria hussain" btntext="Clicked me"/>
    </div>
  );
}

export default App
