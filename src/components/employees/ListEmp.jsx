import React, { useContext, useEffect, useState } from "react";
import Dashboard from '../../layouts/Dashboard'
import 'animate.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
const ListEmp = () => {
    const base="http://localhost:3050/km"
    const [users,setUsers]=useState("")
   

    useEffect(async()=>{
        axios.get(`${base}/users/`)
        .then(res=>{
            setUsers(res.data.users);
            console.log(users);
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return (
    <Dashboard>
        <div className='pl-8 pr-8 pt-6 text-sm'>
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
<tr className='py-2'>

<td className=' text-left'> Diane Pretty</td>
<td>0788738981</td>
<td>12/03/2021</td>
<td><i className="fa cursor-pointer text-def fa-window-close"></i></td>
<td><i className="fa cursor-pointer text-def fa-chevron-right"></i></td>
</tr>
<tr>
<td className=' text-left'> Diane Pretty</td>
<td>0788738981</td>
<td>12/03/2021</td>
<td><i className="fa cursor-pointer text-def fa-window-close"></i></td>
<td><i className="fa cursor-pointer text-def fa-chevron-right"></i></td>
</tr>
<tr>
<td className=' text-left'> Diane Pretty</td>
<td>0788738981</td>
<td>12/03/2021</td>
<td><i className="fa cursor-pointer text-def fa-window-close"></i></td>
<td><i className="fa cursor-pointer text-def fa-chevron-right"></i></td>
</tr>
<tr>
<td className=' text-left'> Diane Pretty</td>
<td>0788738981</td>
<td>12/03/2021</td>
<td><i className="fa cursor-pointer text-def fa-window-close"></i></td>
<td><i className="fa cursor-pointer text-def fa-chevron-right"></i></td>
</tr>


</tbody>
</table>
          </div>
        </div>
         
    </Dashboard>
    ) 
}

export default ListEmp
