import React from 'react'

const Viewseat = () => {
  return (
    <>
  <div className='mt-10'>
    
    <h1>Reserved seat</h1>

    <table className='border-2'>
      <tr>
        <th className='px-5'>sn</th>
        <th className='px-5'>User Name</th>
        <th className='px-5'>Movie</th>
        <th className='px-5'>Show</th>
        <th className='px-5'>Seat</th>
      </tr>
      <tr>
        <td className='px-5'>1.</td>
        <td className='px-5'>Roshan</td>
        <td className='px-5'>Animal</td>
        <td className='px-5'>10:45 AM</td>
        <td className='px-5'>A1,A8</td>
      </tr>
      <tr>
        <td className='px-5'>2.</td>
        <td className='px-5'>kumr</td>
        <td className='px-5'>Dukan</td>
        <td className='px-5'>10:45 AM</td>
        <td className='px-5'>A1,A8</td>
      </tr>
    </table>
   </div>
    </>
  )
}

export default Viewseat