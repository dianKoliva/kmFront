import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import "./styles/index.css"

import Attendance from './components/employees/Attendance'
import ViewEmp from './components/employees/ViewEmp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <ViewEmp></ViewEmp>
    </div>
  )
}

export default App
