import axios from 'axios';
import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { Context } from '../../Context';

const Diactivate = () => {
  const base="http://localhost:3050/km"
    const [close,setClose]=useState(false)
    const {showDeactivate,setShowDeactivate}=useContext(Context)
    const {employee_to_diactivate,setEmployee_to_diactivate}=useContext(Context)
    const {fetch}=useContext(Context)
    

    const diactivate=async()=>{

      axios.put(`${base}/abakozi/disable/${employee_to_diactivate._id}`)
      .then((resp)=>{
        fetch()
        console.log(resp);
      })
      .catch((err)=>{
        console.log(err);
      })

    }
   
  return(
    <div className=' bg-black w-full h-screen absolute  overflow-x-hidden overflow-hidden'>
 
 <div className=' bg-white text-center  rounded-md text-sm h-32  m-52 ml-96 w-56 '>
     <div className='text-right mr-2 pt-1 cursor-pointer'>
     <i className='fa fa-close' onClick={()=>setShowDeactivate(false)} ></i>
     </div>
    
<p className='pt-2 '>
Ntabwo uyu mukozi agikora muri company yacu
</p>
<button onClick={()=>{diactivate();setShowDeactivate(false)}} className='bg-def  text-white px-5 py-1 rounded-sm  cursor-pointer mt-4'>Yes</button>
    

 </div>
    
      </div>
  )

};

export default Diactivate;
