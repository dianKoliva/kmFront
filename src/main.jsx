import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Route, Link, BrowserRouter } from 'react-router-dom'   
import Signup from './components/forms/Signup'
import Login from "./components/forms/Login"



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
