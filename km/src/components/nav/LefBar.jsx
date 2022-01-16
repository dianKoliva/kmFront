import React from 'react'
import { Link } from 'react-router-dom'

const LefBar = () => {
    return (
        <div className='  bg-side h-screen   pt-0 text-sm '>

<div className=' pl-14 flex pt-10  text-def'> <h1 className=' k font-bold text-3xl  '>K</h1>

  <p className='mt-4 pl-1 font-bold'>oliva motors</p>

</div>

<div className='mt-16 '>
   
   <div className='  hover:border-def  border-side border-l-4 borer-solid '>
       <p className='py-1'> <i className="fa p pl-14 cursor-pointer text-def fa-home mr-3"></i>
            Home</p>
  
   </div>
       
       <Link to="/abakozi">
             <div className=' mt-8 hover:border-def  border-side border-l-4 borer-solid '>

       <p className='py-1'><i className="fa  pl-14 cursor-pointer text-def fa-users mr-3"></i>
         Abakozi</p>
        
         </div>
       </Link>
  
         <div className=' mt-8 hover:border-def  border-side border-l-4 borer-solid '>
             <p className='py-1'>
             <i className="fa  pl-14 cursor-pointer text-def fa-car mr-3"></i>
            Imodoka
             </p>
             </div>
      
             <div className=' mt-8 hover:border-def  border-side border-l-4 borer-solid '>
       <p className='py-1'>
       <i className="fa pl-14 cursor-pointer text-def fa-money mr-3"></i>
            Finances
       </p>
       
            </div>
            <div className=' mt-8 hover:border-def  border-side border-l-4 borer-solid '>
            <p className='py-1'>
       <i className="fa pl-14 cursor-pointer text-def fa-cogs mr-3"></i>
            Settings
       </p>
            </div>
</div>



<div className='pl-16 pt-20 text-center '>
     <div className='border-2 border-def border-solid rounded-full w-fit ty '>
     <i className='fa text-3xl text-def fa-user px-6 py-4'></i>
     </div>
     
</div>
        
        </div>
    )
}

export default LefBar
