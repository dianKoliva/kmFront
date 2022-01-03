import React from 'react'
import Dashboard from '../../layouts/Dashboard'

const RegisterEmp = () => {
    return (
           <Dashboard>

<div className=' text-sm bg-box py-10 px-10 cnt2  w-2/5 mt-52  '>
    <h1 className='text-center mb-4 text-def font-bold'>Register new KM employee</h1>
  <form action="
  ">
 <div>
    <p>Amazina yombi</p>
    <input className=' px-2 py-1   mt-1 focus:outline-none border rounded-md w-9/12 ' type="text" />
    </div>
 <div className='mt-4'>
    <p>Tel no</p>
    <input className=' px-2 py-1   mt-1 focus:outline-none border rounded-md w-9/12 ' type="text" />
    </div>
 <div className='mt-4'>
    <p>Umushahara</p>
    <input className=' px-2 py-1   mt-1 focus:outline-none border rounded-md w-9/12 ' type="text" />
    </div>

 
    <div>
        <input type="checkbox" name="" id="" />
        Agree to terms and conditions 
    </div>

<div>
    <button>Save</button>
</div>


  </form>
   
  
</div>

            </Dashboard>
    
    )
}

export default RegisterEmp
