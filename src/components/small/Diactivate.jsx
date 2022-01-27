import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { Context } from '../../Context';

const Diactivate = () => {
    const [close,setClose]=useState(false)
    const {showDeactivate,setShowDeactivate}=useContext(Context)
    const {confirm_deactivate,setConfirm_deactivate}=useContext(Context)
    const {employee_to_diactivate,setEmployee_to_diactivate}=useContext(Context)
    

   
  return(
    <div className=' bg-black w-full h-screen absolute  overflow-x-hidden overflow-hidden'>
 
 <div className=' bg-white text-center  rounded-md text-sm h-32  m-52 ml-96 w-56 '>
     <div className='text-right mr-2 pt-1 cursor-pointer'>
     <i className='fa fa-close' onClick={()=>setShowDeactivate(false)} ></i>
     </div>
    
<p className='pt-2 '>
Ntabwo uyu mukozi agikora muri company yacu
</p>
<button onClick={()=>{setConfirm_deactivate(true); console.log(employee_to_diactivate)}} className='bg-def  text-white px-5 py-1 rounded-sm  cursor-pointer mt-4'>Yes</button>
    

 </div>
    
      </div>
  )

};

export default Diactivate;
