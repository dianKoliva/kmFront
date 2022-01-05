import React from 'react'
import Dashboard from '../../layouts/Dashboard'
const ListEmp = () => {
    return (
    <Dashboard>
        <div className='pl-8 pr-8 pt-6 text-sm'>
        <div>
              <div className="flex text-sm">
                <input type="search" spellCheck="false"  className=' focus:outline-none border-2 border-side rounded-md px-2 py-1  ' name="" id="" />
                <button className='bg-def px-4 absolute right-0 mr-8 py-1 text-white rounded-sm'> + Add employee</button>
              </div>

              <div className='' >
                  <div className='flex mt-6 mb-2'>
                  <p className=' cursor-pointer'>Abakozi</p>
                  <p className=' cursor-pointer ml-6'>Abatagikora</p>
                  <p className=' cursor-pointer ml-6'>Abatarishyurwa</p>
                  </div>

                  <div className='border-b-2 border-solid  border-side'></div>
              </div>
          </div>
          <div>
          <table className='w-full mt-4' cellSpacing="0">
<thead className='py-2'>

<th className=' text-left' width="100">  Employee</th>

<th width="150">Phone number</th>
<th width="200">Created at</th>
<th width="150">Diactivate</th>
</thead>
<tbody>
<tr className='py-2'>

<td className=' text-left'> Diane Pretty</td>
<td>0788738981</td>
<td>12/03/2021</td>
<td><i class="fa text-def fa-window-close"></i></td>
</tr>
<tr>
<td className=' text-left'> Diane Pretty</td>
<td>0788738981</td>
<td>12/03/2021</td>
<td><i class="fa text-def fa-window-close"></i></td>
</tr>
<tr>
<td className=' text-left'> Diane Pretty</td>
<td>0788738981</td>
<td>12/03/2021</td>
<td><i class="fa text-def fa-window-close"></i></td>
</tr>
<tr>
<td className=' text-left'> Diane Pretty</td>
<td>0788738981</td>
<td>12/03/2021</td>
<td><i class="fa text-def fa-window-close"></i></td>
</tr>


</tbody>
</table>
          </div>
        </div>
         
    </Dashboard>
    ) 
}

export default ListEmp
