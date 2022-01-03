import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import "./styles/index.css"

import Dashboard from './layouts/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Dashboard></Dashboard>
    </div>
  )
}

export default App
