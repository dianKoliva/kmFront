import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import "./styles/index.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Signup from "./components/forms/Signup"
import Login from './components/forms/Login';
import ListEmp from "./components/employees/ListEmp";
import ViewEmp from './components/employees/ViewEmp';
import Abatarishyurwa  from "./components/employees/Abatarishyurwa";
import Abatagikora from "./components/employees/Abatagikora";
import Abaje from "./components/employees/Abaje"
import Register from  "./components/employees/RegisterEmp"


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

    <Router>
    <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/signup" exact component={ Signup } />
    <Route path="/abakozi" exact component={ ListEmp } />
    <Route path="/abakozi/details" exact component={ ViewEmp } />
    <Route path="/employees/abatarishyurwa" exact component={ Abatarishyurwa } />
    <Route path="/employees/abatagikora" exact component={ Abatagikora } />
    <Route path="/employees/abaje" exact component={ Abaje } />
    <Route path="/employees/new" exact component={ Register } />

    </Switch>
    </Router>
    </div>
  )
}

export default App
