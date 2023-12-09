import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'

const Userreserveseat = () => {
  const [reserveseat, setSeat] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/profile/reserveseats`, {
      headers: {
        token: Cookies.get("token")
      }
    }).then(res => {
      setSeat(res.data)
      console.log(res)
    }).catch(error => {
      console.log(error)
    })
  }, [])
  return (
    <>
      <div className='mt-10'>

        <h1>Reserved seat</h1>

        <table className='border-2'>
          <tr>
            <th className='md:px-5 px-3'>sn</th>
            <th className='md:px-5 px-3'>Movie</th>
            <th className='md:px-5 px-3'>Show</th>
            <th className='md:px-5 px-3'>Seats</th>
          </tr>

          {reserveseat.map((item, index) => (
            <tr key={index} className='text-center'>
              <td className='md:px-5 px-3'>{index + 1}</td>
              <td className='md:px-5 px-3'>{item.movieID.title}</td>
              <td className='md:px-5 px-3'>{item.showtimeID.time}</td>
              <td className='md:px-5 px-3'>{item.seat.join(',')}</td>
            </tr>

          ))}

        </table>
      </div>
    </>
  )
}

export default Userreserveseat