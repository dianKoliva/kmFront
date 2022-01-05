import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import "./styles/index.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Attendance from './components/employees/Attendance'
import Signup from "./components/forms/Signup"
import Login from './components/forms/Login';
import ListEmp from "./components/employees/ListEmp";
import ViewEmp from './components/employees/ViewEmp';
import Abatarishyurwa  from "./components/employees/Abatarishyurwa";
import Abatagikora from "./components/employees/Abatarishyurwa";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

    <Router>
    <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/signup" exact component={ Signup } />
    <Route path="/employees" exact component={ ListEmp } />
    <Route path="/employees/details" exact component={ ViewEmp } />
    <Route path="/employees/abatarishyurwa" exact component={ Abatarishyurwa } />
    <Route path="/employees/abatagikora" exact component={ Abatagikora } />

    </Switch>
    </Router>
    </div>
  )
}

export default App
