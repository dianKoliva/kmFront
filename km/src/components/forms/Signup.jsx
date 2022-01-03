import React from 'react'
import Forms from '../../pages/Forms'

const Signup = (props) => {
    return (
        <Forms>
        <div className='  bg-white    rounded-lg px-14 py-6' >
            <div className='mb-8 text-center '>
            <p className=' text-def font-bold'> Sign in to KM</p>
            <p className=' text-xs text-def'>Best Chassis repairing company</p>
            </div>
           

            <form action="" className='text-sm'>
                <div className='inputs'>
                <div>
                <p>User name</p>
                <input spellCheck="false" className=' h-4 focus:outline-none line text-sm w-full bg-white' type="text" name="" id="" />
                </div>
                <div className='mt-4'>
                <p>Email</p>
                <input spellCheck="false" className=' h-4 focus:outline-none line text-sm w-full bg-white' type="text" name="" id="" />
                </div> 
                <div className='mt-4'>
                <p>Password</p>
                <input spellCheck="false" className=' h-4 focus:outline-none line text-sm w-full bg-white' type="text" name="" id="" />
                </div> 
                </div>

                <div className='mt-6 text-center'>
                    <button className=' bg-def px-6 rounded-md  text-white py-2'> Let's go</button>
                    <p className='mt-4   text-xs'>Already have an account? <span className='text-def underline font-bold cursor-pointer'>Sign in</span></p>
                </div>
               
               
            </form>
           
        </div>
        </Forms>
    )
}

export default Signup
