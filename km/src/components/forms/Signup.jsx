import React from 'react'
import Forms from '../../pages/Forms'

const Signup = (props) => {
    return (
        <Forms>
        <div className='  bg-white w-1/2 h-1/2' >
            <p className=' text-def'> Sign in to KM</p>
            <p>Best Chassis repairing company</p>

            <form action="">
                <div className='inputs'>
                <div>
                <p>user name</p>
                <input type="text" name="" id="" />
                </div> 
                </div>

                <div>
                    <button> Let's go</button>
                    <p>Already have an account? <span>Sign in</span></p>
                </div>
               
               
            </form>
           
        </div>
        </Forms>
    )
}

export default Signup
