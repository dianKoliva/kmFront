import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import "./styles/index.css"

import Signup from './components/forms/Signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Signup></Signup>
    </div>
  )
}

export default App
