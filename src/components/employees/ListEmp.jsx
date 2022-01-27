import React, { useContext, useEffect, useState } from "react";
import Dashboard from '../../layouts/Dashboard'
import 'animate.css';
import { Link } from 'react-router-dom';

import moment from 'moment';
import Diactivate from "../small/Diactivate";
import { Context } from '../../Context';
import { useHistory } from "react-router-dom";
const ListEmp = () => {
    const base="http://localhost:3050/km"
    
    const {showDeactivate,setShowDeactivate}=useContext(Context)
    const {employee_to_diactivate,setEmployee_to_diactivate}=useContext(Context)
    const {confirm_deactivate,setConfirm_deactivate}=useContext(Context)
    const {details,setDetails,}=useContext(Context)
    const{users,setUsers}=useContext(Context)
    const {fetch}=useContext(Context)
    const history=useHistory()
   
   const see=(dat)=>{
    setDetails(dat);
    history.push("/abakozi/view")
   }

    useEffect(()=>{
        fetch()
    },[])
    return (
        <div >
    <Dashboard>
        {showDeactivate?<Diactivate></Diactivate>:null}
        
        <div className='pl-8 pr-8 pt-6 text-sm overflow-hidden'>
        <div>
        <div className="flex text-sm">
                <input type="search" spellCheck="false" placeholder='search'  className=' focus:outline-none border-2 border-side rounded-md px-2 py-1  ' name="" id="" />
                <div className='absolute right-0 mr-8 flex '>
                    <div className='border-2 mr-10 rounded-md   border-def border-solid'>
                    <i className="fa px-2  text-lg cursor-pointer text-def fa-download"></i>
                    </div>
                    <Link to="/abakozi/new">
                    <button className='  bg-def px-4  h-8 text-white rounded-md'> + Add employee</button>
                    </Link>
               
                </div>
                
              </div>


              <div className='' >
                  <div className='flex mt-6 mb-2'>
                      <Link to="/abakozi">
                      <p className=' cursor-pointer text-def font-bold  '>Abakozi</p>
                      </Link>
                
<Link to="/abakozi/abatagikora">
<p className=' cursor-pointer ml-6 hover:underline '>Abatagikora</p>
</Link>

<Link to="/abakozi/abatarishyurwa">
<p className=' cursor-pointer ml-6 hover:underline'>Abatarishyurwa</p>
</Link>                
                  
                  </div>

                  <div className='border-b-2 border-solid  border-side'></div>
              </div>
          </div>
          <div>
          <table className='w-full mt-4' cellSpacing="0">
<thead className='py-2'>

<th className=' text-left' width="100">  Employee</th>

<th width="150">Phone number</th>
<th width="200">Created at</th>
<th width="150">Diactivate</th>
<th width="2"></th>
</thead>
<tbody>
    {users?users.map((dat,num)=>{
return(
<tr className='py-2' key={num}>

<td className=' text-left'> {dat.amazina}</td>
<td>{dat.nimero}</td>
<td>{ moment(dat.created_at).format('L') }</td>
<td><i onClick={()=>{setShowDeactivate(true);setEmployee_to_diactivate(dat)}} className="fa cursor-pointer text-def fa-window-close"></i></td>
<td><i onClick={()=>see(dat)} className="fa cursor-pointer text-def fa-chevron-right"></i></td>
</tr>
)
    }):null}



</tbody>
</table>
          </div>
        </div>
         
    </Dashboard>
    </div>
    ) 
}

export default ListEmp
