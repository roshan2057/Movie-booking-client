import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect } from 'react'

const Details = () => {

  useEffect(()=>{
axios.get(`${process.env.REACT_APP_API}/profile/details`,{
  headers:{
    token:Cookies.get("token")
  }
}).then(res=>{
  console.log(res);
}).catch(error=>{
  console.error(error);
})
  },[])
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