import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import "./styles/index.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <p className="text-lg text-green-400">Hello Vite + React!</p>
    </div>
  )
}

export default App
