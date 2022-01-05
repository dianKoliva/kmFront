import React from 'react'

const LefBar = () => {
    return (
        <div className='  bg-side h-screen  pt-0 text-sm '>

<div className='flex pt-10  text-def'> <h1 className=' k font-bold text-3xl  '>K</h1>

  <p className='mt-4 pl-1 font-bold'>oliva motors</p>

</div>

<div className='mt-16 '>
   
   <div className='  hover:border-def  border-side border-l-4 borer-solid '>
       <p className='py-1'> <i className="fa p pl-14 cursor-pointer text-def fa-home mr-3"></i>
            Home</p>
  
   </div>
       
   <div className=' mt-6 hover:border-def  border-side border-l-4 borer-solid '>
       <p className='py-1'><i className="fa  pl-14 cursor-pointer text-def fa-users mr-3"></i>
         Abakozi</p>
        
         </div>
         <div className=' mt-6 hover:border-def  border-side border-l-4 borer-solid '>
             <p className='py-1'>
             <i className="fa  pl-14 cursor-pointer text-def fa-car mr-3"></i>
            Imodoka
             </p>
             </div>
      
             <div className=' mt-6 hover:border-def  border-side border-l-4 borer-solid '>
       <p className='py-1'>
       <i className="fa pl-14 cursor-pointer text-def fa-money mr-3"></i>
            Finances
       </p>
       
            </div>
            
        <li className='pt-8'>
        <i className="fa cursor-pointer text-def fa-cogs mr-3"></i>
            Settings</li>
  
</div>



        
        </div>
    )
}

export default LefBar
