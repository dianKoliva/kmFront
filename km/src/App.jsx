import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import "./styles/index.css"

import Attendance from './components/employees/Attendance'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Attendance></Attendance>
    </div>
  )
}

export default App
