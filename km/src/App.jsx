import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import "./styles/index.css"

import Forms from './pages/Forms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Forms></Forms>
    </div>
  )
}

export default App
