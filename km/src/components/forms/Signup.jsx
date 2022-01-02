import React from 'react'
import Forms from '../../pages/Forms'

const Signup = () => {
    return (
        <Forms>
        <div>
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
