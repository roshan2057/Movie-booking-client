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
            <th className='px-5'>sn</th>
            <th className='px-5'>Movie</th>
            <th className='px-5'>Show</th>
            <th className='px-5'>Seats</th>
          </tr>

          {reserveseat.map((item, index) => (
            <tr key={index} className='text-center'>
              <td className='px-5'>{index + 1}</td>
              <td className='px-5'>{item.movieID.title}</td>
              <td className='px-5'>{item.showtimeID.time}</td>
              <td className='px-5'>{item.seat.join(',')}</td>
            </tr>

          ))}

        </table>
      </div>
    </>
  )
}

export default Userreserveseat