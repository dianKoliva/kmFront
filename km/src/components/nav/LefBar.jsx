import React from 'react'

const LefBar = () => {
    return (
        <div className='  bg-side h-screen lg:pl-10 pt-0 text-sm '>

<div className='flex pt-10  text-def'> <h1 className=' k font-bold text-3xl  '>K</h1>

  <p className='mt-4 pl-1 font-bold'>oliva motors</p>

</div>

<div className='mt-16 '>
    <ul>
        <li >
        <i className="fa cursor-pointer text-def fa-home mr-3"></i>
            Home</li>
        <li className='pt-8'> 
        <i className="fa cursor-pointer text-def fa-users mr-3"></i>
         Abakozi</li>
        <li className='pt-8'>
        <i className="fa cursor-pointer text-def fa-car mr-3"></i>
            Imodoka</li>
        <li className='pt-8'>
        <i className="fa cursor-pointer text-def fa-money mr-3"></i>
            Finances</li>
            
        <li className='pt-8'>
        <i className="fa cursor-pointer text-def fa-cogs mr-3"></i>
            Settings</li>
    </ul>
</div>



        
        </div>
    )
}

export default LefBar
