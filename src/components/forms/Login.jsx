import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import Forms from '../../layouts/Forms'

const Login = (props) => {
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [notEmail,setNotEmail]=useState(false);
    const [empty,setEmpty]=useState(false)
    const login=async()=>{

    }

    return (
        <Forms>
        <div className='  bg-white    rounded-lg px-14 py-6' >
            <div className='mb-8 text-center '>
            <p className=' text-def font-bold'> Sign in to KM</p>
            <p className=' text-xs text-def'>Best Chassis repairing company</p>
            </div>
           

            <div action="" className='text-sm'>
                <div className='inputs'>
              
                <div className='mt-4'>
                <p>Email</p>
                <input
                value={email}
                onChange={e=>setEmail(e.target.value)}
                spellCheck="false" className=' h-4 focus:outline-none line text-sm w-full bg-white' type="text" name="" id="" />
                </div> 
                <div className='mt-4'>
                <p>Password</p>
                <input
                value={pass}
                onChange={e=>setPass(e.target.value)}
                spellCheck="false" className=' h-4 focus:outline-none line text-sm w-full bg-white' type="text" name="" id="" />
                </div> 
                <div className='mt-6 flex text-sm'>
                    <input type="checkbox"  className='mt-1 bg-def border-8' name="" id="" />
                <p className='ml-2'>Remember me</p>
               
                </div> 
                </div>

                <div className='mt-6 text-center'>
                    <Link to="/abakozi">
                    <button
                    onClick={()=>login}
                    className=' bg-def px-8 rounded-md  text-white py-2'> Let's go</button>
                    </Link>
                   
                    <Link to="/signup">
                    <p className='mt-4   text-xs'>Have no account yet? <span className='text-def underline font-bold cursor-pointer'>Sign up</span></p>
                    </Link>
                </div>
               
               
            </div>
           
        </div>
        </Forms>
    )
}

export default Login
