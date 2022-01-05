import React from 'react'
import Dashboard from '../../layouts/Dashboard'
import 'animate.css';
const ListEmp = () => {
    return (
    <Dashboard>
        <div className='pl-8 pr-8 pt-6 text-sm'>
        <div>
              <div className="flex text-sm">
                <input type="search" spellCheck="false" placeholder='search'  className=' focus:outline-none border-2 border-side rounded-md px-2 py-1  ' name="" id="" />
                <div className='absolute right-0 mr-8 flex'>
                    <div className='border-2 mr-10 rounded-md  border-def border-solid'>
                    <i className="fa px-2  text-lg cursor-pointer text-def fa-download"></i>
                    </div>
                <button className='  bg-def px-4  h-8 text-white rounded-md'> + Add employee</button>
                </div>
                
              </div>

              <div className='' >
                  <div className='flex mt-6 mb-2'>
                  <p className=' cursor-pointer hover:underline '>Abakozi</p>
                  <p className=' cursor-pointer ml-6 hover:underline '>Abatagikora</p>
                  <p className=' cursor-pointer ml-6 hover:underline'>Abatarishyurwa</p>
                  </div>

                  <div className='border-b-2 border-solid  border-side'></div>
              </div>
          </div>
          <div>
          <table className='w-full mt-4' cellSpacing="0">
<thead className='py-2'>

<th className=' text-left' width="100">  Employee</th>

<th width="150">No of days</th>
<th width="200">Amount</th>
<th width="150">Action</th>

</thead>
<tbody>
<tr className='py-2'>

<td className=' text-left'> Diane Pretty</td>
<td>0788738981</td>
<td>12/03/2021</td>
<td>
<button className='border-2 border-solid focus: border-def px-6 rounded-md py-1'>
    Paid
</button>
</td>

</tr>
<tr>
<td className=' text-left'> Diane Pretty</td>
<td>0788738981</td>
<td>12/03/2021</td>
<td>
<button className='border-2 border-solid focus: border-def px-6 rounded-md py-1'>
    Paid
</button>
</td>

</tr>
<tr>
<td className=' text-left'> Diane Pretty</td>
<td>0788738981</td>
<td>12/03/2021</td>
<td>

<button className='border-2 border-solid focus: border-def px-6 rounded-md py-1'>
    Paid
</button>
</td>

</tr>
<tr>
<td className=' text-left'> Diane Pretty</td>
<td>0788738981</td>
<td>12/03/2021</td>
<td>

<button className='border-2 border-solid focus: border-def px-6 rounded-md py-1'>
    Paid
</button>

</td>

</tr>


</tbody>
</table>
          </div>
        </div>
         
    </Dashboard>
    ) 
}

export default ListEmp
