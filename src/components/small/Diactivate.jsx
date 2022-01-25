import React from 'react';
import { useState } from 'react/cjs/react.development';

const Diactivate = () => {
    const [close,setClose]=useState(false)
    const closer=()=>{
        setClose(true)
    }
  return(
    <div className=' bg-black w-full h-screen absolute  overflow-x-hidden overflow-hidden'>
 
 <div className=' bg-white text-center  rounded-md text-sm h-32  m-52 ml-96 w-56 '>
     <div className='text-right mr-2 pt-1 cursor-pointer'>
     <i className='fa fa-close '></i>
     </div>
    
<p className='pt-2 '>
Ntabwo uyu mukozi agikora muri company yacu
</p>
<button className='bg-def  text-white px-5 py-1 rounded-sm  cursor-pointer mt-4'>Yes</button>
    

 </div>
    
      </div>
  )

};

export default Diactivate;
