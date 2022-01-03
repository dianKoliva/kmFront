import React from 'react'
import Dashboard from '../../layouts/Dashboard'

const ViewEmp = () => {
    return (
           <Dashboard>

<div className=' text-sm bg-box py-10 px-10 cnt2  w-2/5 mt-24  '>
    <h1 className='text-center mb-4 text-def font-bold'>Register new KM employee</h1>
  <form action=" 
  " className='pl-14 mt-8'>
 <div>
    <p>Amazina yombi</p>
    <input spellCheck="false" className=' px-2 py-1   mt-1 focus:outline-none border rounded-md w-10/12 ' type="text" />
    </div>
 <div className='mt-2'>
    <p>Tel no</p>
    <input spellCheck="false" className=' px-2 py-1   mt-1 focus:outline-none border rounded-md w-10/12 ' type="text" />
    </div>
 <div className='mt-2'>
    <p>Umushahara</p>
    <input spellCheck="false" className=' px-2 py-1   mt-1 focus:outline-none border rounded-md w-10/12 ' type="text" />
    </div>

 
    <div className='mt-2 flex'>
        <input type="checkbox" className='mt-1' name="" id="" />
        <p className='ml-1'>  Agree to terms and conditions </p>
       
    </div>

<div className='mt-4'>
    <button className='bg-def text-white text-sm w-10/12 rounded-md py-1'>Save</button>
</div>


  </form>
   
  
</div>

            </Dashboard>
    
    )
}

export default ViewEmp
