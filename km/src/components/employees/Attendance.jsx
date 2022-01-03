import React from 'react'
import Dashboard from '../../layouts/Dashboard'
const Attendance = () => {
    return (
    <Dashboard>
        <div className='pl-8 pr-8 pt-6 text-sm'>
        <div>
              <div className="flex text-sm">
                  <p className='mb-4'>Employees Attendance</p>
                <input type="search" spellCheck="false"  className=' absolute right-0 mr-8 focus:outline-none border-2 border-side rounded-md px-2 py-1  ' name="" id="" />
                

              </div>

              <div >
                

                  <div className='border-b-2 border-solid  border-side'></div>
              </div>
          </div>
          <div>
          <table className='w-full mt-4' cellspacing="0">
<thead className='py-2'>
<th width="100">Employee</th>
<th width="150">Date</th>
<th width="200">Attended</th>

</thead>
<tbody>
<tr className='py-2'>
<td>1</td>
<td>AW</td>
<td>Aruba</td>

</tr>
<tr>
<td>2</td>
<td>AU</td>
<td>Australia</td>

</tr>
<tr>
<td>3</td>
<td>AT</td>
<td>Austria</td>

</tr>
<tr>
<td>4</td>
<td>AZ</td>
<td>Azerbaijan</td>
</tr>


</tbody>
</table>
          </div>
        </div>
         
    </Dashboard>
    ) 
}

export default Attendance
