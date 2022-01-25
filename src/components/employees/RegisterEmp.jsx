import React from 'react'
import { useState } from 'react/cjs/react.development'
import Dashboard from '../../layouts/Dashboard'

const RegisterEmp = () => {

    const [names,setName]=useState("")
    const [tel,setTel]=useState("")
    const[salary,setSalary]=useState("")

    const save= async()=>{
        console.log(names,tel,salary);
    }

    return (
           <Dashboard>
<div className=' text-sm bg-box py-12 px-10 cnt2  w-5/12  mt-24  '>
    <h1 className='text-center mb-4 text-def font-bold'>Register new KM employee</h1>
  <div action=" 
  " className='pl-14 mt-8'>
 <div>
    <p>Amazina yombi</p>
    <input 
    
    value={names}
    onChange={e=>setName(e.target.value) }
    spellCheck="false" className=' px-2 py-1   mt-1 focus:outline-none border rounded-md w-10/12 ' type="text" />
    </div>
 <div className='mt-3'>
    <p>Tel no</p>
    <input 
    
    value={tel}
    onChange={e=>setTel(e.target.value) }
    spellCheck="false" className=' px-2 py-1   mt-1 focus:outline-none border rounded-md w-10/12 ' type="text" />
    </div>
 <div className='mt-3'>
    <p>Umushahara</p>
    <input 
    value={salary}
    onChange={e=>setSalary(e.target.value) }
    spellCheck="false" className=' px-2 py-1   mt-1 focus:outline-none border rounded-md w-10/12 ' type="text" />
    </div>

 
    <div className='mt-3 flex'>
        <input type="checkbox" className='mt-1' name="" id="" />
        <p className='ml-1'>  Agree to terms and conditions </p>
    </div>

<div className='mt-4'>
    <button
    onClick={save}
    className='bg-def text-white text-sm w-10/12 rounded-md py-2'>Save</button>
</div>


  </div>
   
  
</div>

            </Dashboard>
    
    )
}

export default RegisterEmp
