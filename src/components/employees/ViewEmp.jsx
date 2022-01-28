import React from 'react'
import { useContext, useState } from 'react/cjs/react.development';
import { Context } from '../../Context';
import Dashboard from '../../layouts/Dashboard'

const ViewEmp = () => {
    const days=0;
    const {details,setDetails}=useContext(Context)
    const [amazina,setAmazina]=useState(details.amazina)
    const [nimero,setNimero]=useState(details.nimero);
    const [umushahara,setUmushahara]=useState(details.umushahara)

   
    return (
           <Dashboard>

<div className=' text-sm bg-box py-10 px-10 cnt2  w-2/5 mt-24  '>
    <h1 className='text-center mb-4 text-def font-bold'>View Km employee</h1>
  <form action=" 
  " className='pl-14 mt-2'>
 <div>
    <p>Amazina yombi</p>
    <input
    
    value={amazina}
    onChange={(e)=>setAmazina(e.target.value)}
 
    

    spellCheck="false" className=' px-2 py-1   mt-1 focus:outline-none border rounded-md w-10/12 ' type="text" />
    </div>
    
    <div className='mt-2'>
    <p>Nimero ya tel</p>
    <input value={nimero}
    onChange={(e)=>{setNimero(e.target.value)}}
    spellCheck="false" className=' px-2 py-1   mt-1 focus:outline-none border rounded-md w-10/12 ' type="text" />
    </div>


 <div className='mt-2'>
    <p>Umushahara</p>
    <input value={umushahara}
    onChange={(e)=>{setUmushahara(e.target.value)}}
    spellCheck="false" className=' px-2 py-1   mt-1 focus:outline-none border rounded-md w-10/12 ' type="text" />
    </div>
    
    <div>
        <div className='flex mt-2'>
 <div>
     <p>$ for {days} days</p>
     <input spellCheck="false" className=' px-2 py-1   mt-1 focus:outline-none border rounded-md w-8/12 ' type="text" />
 </div>
 
 <div>
     <p>Ayogukata</p>
     <input spellCheck="false" className=' px-2 py-1   mt-1 focus:outline-none border rounded-md w-8/12 ' type="text" />
 </div>
        </div>
    </div>



 
    <div className='mt-2 flex'>
        <input type="checkbox" className='mt-1' name="" id="" />
        <p className='ml-1'> Fully paid </p>
       
    </div>

<div className='mt-4'>
    <button className='bg-def text-white text-sm w-10/12 rounded-md py-2'>Update</button>
</div>


  </form>
   
  
</div>

            </Dashboard>
    
    )
}

export default ViewEmp
