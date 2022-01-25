import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react/cjs/react.development'
import Forms from '../../layouts/Forms'
import validator from 'validator'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = (props) => {
    const base="http://localhost:3050/km"
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [notEmail,setNotEmail]=useState(false);
    const [empty,setEmpty]=useState(false)
    const [not,setNot]=useState(false)
    const history=useHistory();

    const login=async()=>{

        if(email===""||pass===""){
            setNotEmail(false)
        setEmpty(true);
          }
          else if(!validator.isEmail(email)){
            setNotEmail(true)
        }
        else{
            setEmpty(false)
            setNotEmail(false)

            await axios.post(`${base}/users/login`, {
                password:pass,
                email:email
                      }).then(resp=>{
                         if(resp.data.message=="invalid user"){

                         }
                        else{
history.push("/abakozi")
                        }
                      })
                      .catch(resp=>{
                          console.log(resp);
                      })
                 
        }

    }

    return (
        <Forms>
        <div className='  bg-white    rounded-lg px-14 py-6' >
            <div className='mb-6 text-center '>
            <p className=' text-def font-bold'> Sign in to KM</p>
            <p className=' text-xs text-def'>Best Chassis repairing company</p>
            </div>
           
            <div className=' mb-6'>
                {notEmail? <div className='text-xs rounded-sm   bg-side'>
             <div className='px-2 py-2'>
               
             <p className='text-center  text-red1'>Email is invalid</p>
                
                </div>
             </div>:empty? <div className='text-xs rounded-sm   bg-side'>
             <div className='px-2 py-2'>
              
                <p className='text-center  text-red1'> Fill out all fields </p>
               
                
                </div>
             </div>:
             not?<div className='text-xs rounded-sm   bg-side'>
             <div className='px-2 py-2'>
              
                <p className='text-center  text-red1'> User not found </p>
               
                
                </div>
             </div>:
             null}
            
               
               
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
                    {/* <Link to="/abakozi"> */}
                    <button
                    onClick={login}
                    className=' bg-def px-8 rounded-md  text-white py-2'> Let's go</button>
                    {/* </Link> */}
                   
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
