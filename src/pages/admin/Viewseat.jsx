import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewseat = () => {
  const [data, setData]= useState([]);
  useEffect(()=>{
    axios.get(`${process.env.REACT_APP_API}/bookinglist`).then(res=>{
      console.log(res);
      setData(res.data);
    }).catch(error=>{
      console.error(error)
    })
  },[])
  return (
    <>
  <div className='mt-10'>
    
    <h1>Reserved seat</h1>

    <table className='border-2'>
      <thead>

      <tr>
        <th className='px-5'>sn</th>
        <th className='px-5'>User Name</th>
        <th className='px-5'>Movie</th>
        <th className='px-5'>Show</th>
        <th className='px-5'>Seat</th>
      </tr>
      </thead>
      <tbody>
        {data.map((item,index)=>(
      <tr key={index} className='text-center'>
        <td className='px-5'>{index+1}</td>
        <td className='px-5'>{item.title}</td>
        <td className='px-5'>{item.movieID.title}</td>
        <td className='px-5'>{item.showtimeID.time}</td>
        <td className='px-5'>{item.seat.join(',')}</td>
      </tr>

        ))}


      </tbody>
      
    </table>
   </div>
    </>
  )
}

export default Viewseat