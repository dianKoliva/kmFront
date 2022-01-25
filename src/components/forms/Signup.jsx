import React, { useState } from 'react'
import Forms from '../../layouts/Forms'
import { Link } from 'react-router-dom'
import axios from 'axios'
import validator from 'validator'

const Signup = (props) => {
    const base="http://localhost:3050/km"

    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [notEmail,setNotEmail]=useState(false);

  
    const  sign_Up=()=>{
 
      
      console.log(validator.isEmail(email));
    //     await axios.post('/signup', {
    //  name:name,
    //  passord:pass,
    //  email:email
    //        }).then(resp=>{
    //            console.log(resp);
    //        })
    //        .catch(resp=>{
    //            console.log(resp);
    //        })
    }
    return (
        <Forms>
        <div className='  bg-white  shadow-lg   rounded-lg px-14 py-6' >
            <div className='mb-8 text-center '>
            <p className=' text-def font-bold'> Sign up to KM</p>
            <p className=' text-xs text-def'>Best Chassis repairing company</p>
            </div>

            <div className='text-xs rounded-sm bg-side '>
                <div className='px-2 py-2'>
                <p className='text-red'>Provide a valid email</p>
                </div>
               
            </div>
           

            <div className='text-sm'>
                <div className='inputs'>
                <div>
                <p>User name</p>
                <input
                value={name}
                onChange={
                    e=>setName(e.target.value)}
                 spellCheck="false" className=' h-4 focus:outline-none line text-sm w-full bg-white' type="text" name="" id="" />
                </div>
                <div className='mt-4'>
                <p>Email</p>
                <input
                value={email}
                onChange={
                    e=>setEmail(e.target.value)}
                spellCheck="false" className=' h-4 focus:outline-none line text-sm w-full bg-white' type="text" name="" id="" />
                </div> 
                <div className='mt-4'>
                <p>Password</p>
                <input
                value={pass}
                onChange={
                    e=>setPass(e.target.value)}
                spellCheck="false" className=' h-4 focus:outline-none line text-sm w-full bg-white' type="text" name="" id="" />
                </div> 
                </div>

                <div className='mt-6 text-center'>
                    <button
                    onClick={()=>{sign_Up()}}
                    className=' bg-def px-6 rounded-md  text-white py-2'> Let's go</button>
                    <Link to="/">
                    <p
                     className='mt-4   text-xs'>Already have an account? <span className='text-def underline font-bold cursor-pointer'>Sign in</span></p>
                    </Link>
                  
                </div>
               
               
            </div>
           
        </div>
        </Forms>
    )
}

export default Signup
