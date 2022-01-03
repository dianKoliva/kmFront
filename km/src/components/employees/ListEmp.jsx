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

              <div >
                  <div className='flex mt-4'>
                  <p>Abakozi</p>
                  <p className='ml-6'>Abatagikora</p>
                  <p className='ml-6'>Abatarishyurwa</p>
                  </div>
             

                  <div className='border-b-2 border-solid  border-side'></div>
              </div>
          </div>
          <div>
          <table className='w-full mt-4' cellspacing="0">
<thead className='py-2'>
<th width="100">Employee</th>
<th width="150">Phone number</th>
<th width="200">Created at</th>
<th width="150">Diactivate</th>
</thead>
<tbody>
<tr className='py-2'>
<td>1</td>
<td>AW</td>
<td>Aruba</td>
<td>297</td>
</tr>
<tr>
<td>2</td>
<td>AU</td>
<td>Australia</td>
<td>61</td>
</tr>
<tr>
<td>3</td>
<td>AT</td>
<td>Austria</td>
<td>43</td>
</tr>
<tr>
<td>4</td>
<td>AZ</td>
<td>Azerbaijan</td>
<td>994</td>
</tr>


</tbody>
</table>
          </div>
        </div>
         
    </Dashboard>
    ) 
}

export default ListEmp
