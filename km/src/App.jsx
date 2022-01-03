import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import "./styles/index.css"

import Login from './components/forms/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Login></Login>
    </div>
  )
}

export default App
