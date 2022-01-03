import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import "./styles/index.css"

import RegisterEmp from './components/employees/RegisterEmp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <RegisterEmp></RegisterEmp>
    </div>
  )
}

export default App
