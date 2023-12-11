import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'

const Details = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/profile/details`, {
      headers: {
        token: Cookies.get("token")
      }
    }).then(res => {
      setData(res.data);
      console.log(res);
    }).catch(error => {
      window.location.href = '/login'
      console.error(error);
    })
  }, [])
  return (
    <>

      <div className='flex mt-20 w-full items-start'>
        <table className=''>
          <tr>
            <td className='px-4'>Name</td>
            <td className='px-4'>{data.name}</td>
          </tr>
          <tr>
            <td className='px-4'>Email</td>
            <td className='px-4'>{data.email}</td>
          </tr>
          <tr>
            <td className='px-4'>Phone</td>
            <td className='px-4'>{data.phone}</td>
          </tr>
        </table>
      </div>
    </>
  )
}

export default Details