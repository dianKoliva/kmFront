import React from 'react'
import LefBar from '../components/nav/LefBar'


const Dashboard = (props) => {
    return (
        <div className='flex w-full '>
           <div className='nav w-2/12 '>
           <LefBar></LefBar>
           </div>
           <div className='bg-white'>
               {props.children}
               </div> 
        </div>
    )
}

export default Dashboard
