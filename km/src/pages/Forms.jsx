import React from 'react'

const Forms = (props) => {
    return (
        <div className='forf h-screen w-full'>
            <div className='flex text-def pt-10 pl-10'>
            <h1 className='k text-4xl font-bold '>K</h1>
         <p className=' font-bold mt-5 pl-1 space-x-0 text-sm'>oliva motors</p>
            </div>
        <div>
        {props.children}
        </div>
        </div>
    )
}

export default Forms
