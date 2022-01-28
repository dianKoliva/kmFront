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
import axios from 'axios';
import {Context} from "./Context"


function App() {

  //variables
  const [count, setCount] = useState(0)
  const [showDeactivate,setShowDeactivate]=useState(false)
  const [employee_to_diactivate,setEmployee_to_diactivate]=useState({})
  const [details,setDetails]=useState({})
  const [users,setUsers]=useState([])
  const base="http://localhost:3050/km"
  const [emp_salary,setEmp_salary]=useState({});

  const sal=async()=>{
    
    await axios.post(`${base}/salary/new`, {
      umukozi_id:emp_salary._id
    }).then((r)=>{
      console.log(r);
    })
    .catch(err=>{
      console.log(err);
    })
  }

  //functions
  
  const fetch=async()=>{
    axios.get(`${base}/abakozi/`)
    .then(res=>{
               var hold=[];
               hold=res.data.abakozi

               var hold2=[];
                       for(var i=0;i<hold.length;i++){
            if(hold[i].status=="active"){
              hold2.push(hold[i])
            }
           
        }
       

        setUsers(hold2);
       
    })
    .catch(err=>{
        console.log(err);
    })
}





  return (
    <Context.Provider value={{
      showDeactivate,setShowDeactivate,
      details,setDetails,
      employee_to_diactivate,setEmployee_to_diactivate,
      users,setUsers,
      fetch,
      emp_salary,setEmp_salary,
      sal



      }}>
    <div className="App">

    <Router>
    <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/signup" exact component={ Signup } />
    <Route path="/abakozi" exact component={ ListEmp } />
    <Route path="/abakozi/view" exact component={ ViewEmp } />
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
