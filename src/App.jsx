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

import {Context} from "./Context"


function App() {
  const [count, setCount] = useState(0)
  const [showDeactivate,setShowDeactivate]=useState(false)
  const [employee_to_diactivate,setEmployee_to_diactivate]=useState({})
  const [confirm_deactivate,setConfirm_deactivate]=useState(false)

  return (
    <Context.Provider value={{
      showDeactivate,setShowDeactivate,
      employee_to_diactivate,setEmployee_to_diactivate,
      confirm_deactivate,setConfirm_deactivate
      }}>
    <div className="App">

    <Router>
    <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/signup" exact component={ Signup } />
    <Route path="/abakozi" exact component={ ListEmp } />
    <Route path="/abakozi/details" exact component={ ViewEmp } />
    <Route path="/abakozi/abatarishyurwa" exact component={ Abatarishyurwa } />
    <Route path="/abakozi/abatagikora" exact component={ Abatagikora } />
    <Route path="/abakozi/abaje" exact component={ Abaje } />
    <Route path="/abakozi/new" exact component={ Register } />

    </Switch>
    </Router>
    </div>
    </Context.Provider>
  )
}

export default App
