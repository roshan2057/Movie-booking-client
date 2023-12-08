import React from 'react'

const Details = () => {
  return (
    <>
 
    <div className='flex mt-20 w-full items-start'>
      <table className=''>
        <tr>
          <td className='px-4'>Name</td>
          <td className='px-4'>Roshan karki</td>
        </tr>
        <tr>
          <td className='px-4'>Email</td>
          <td className='px-4'>rosshankarki@gmail.com</td>
        </tr>
        <tr>
          <td className='px-4'>Password</td>
          <td className='px-4'><input type='password' value='Password'></input></td>
        </tr>
      </table>
    </div>
    </>
  )
}

export default Details