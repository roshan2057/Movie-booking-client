import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewseat = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/bookinglist`).then(res => {
      console.log(res);
      setData(res.data);
    }).catch(error => {
      console.error(error)
    })
  }, [])
  return (
    <>
      <div className='mt-10'>

        <h1>Reserved seat</h1>

        <table className='border-2 md:text-lg text-sm'>
          <thead>

            <tr>
              <th className='md:px-5 px-1'>sn</th>
              <th className='md:px-5 px-1'>User Name</th>
              <th className='md:px-5 px-1'>Phone</th>
              <th className='md:px-5 px-1'>Movie</th>
              <th className='md:px-5 px-1'>Show</th>
              <th className='md:px-5 px-1'>Seat</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className='text-center'>
                <td className='md:px-5 px-1'>{index + 1}</td>
                <td className='md:px-5 px-1'>{item.userID.name}</td>
                <td className='md:px-5 px-1'>{item.userID.phone}</td>
                <td className='md:px-5 px-1'>{item.movieID.title}</td>
                <td className='md:px-5 px-1'>{item.showtimeID.time}</td>
                <td className='md:px-5 px-1'>{item.seat.join(',')}</td>
              </tr>

            ))}


          </tbody>

        </table>
      </div>
    </>
  )
}

export default Viewseat