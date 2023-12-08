import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const Moviedetails = () => {
  const { id } = useParams();
  const [movie, setDetail] = useState({});
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/details/${id}`).then(res => {
      console.log(res.data);
      setDetail(res.data)
    }).catch(error => {
      console.log(error)
    })
  }, [id])

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container py-24 mx-auto">
          <div className="lg:w-2/3 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={movie.imageurl}
            />
            <div className="lg:w-1/2 w-full lg:pl-20 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-4xl title-font font-medium mb-1">
                {movie.title}
              </h1>
              <div className="flex mb-4">{movie.genre}</div>
              <p className="leading-relaxed text-xl">
                {movie.description}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5"></div>
              <div className="flex justify-around">
                <div className="flex flex-col w-64">
                  <ul>
                    <li>Director :</li>
                    <li>Cast : </li>
                    <li>Release On :</li>
                    <li>Duration :</li>
                  </ul>
                </div>
                <div>
                  <ul className='w-56'>
                    <li>{movie.director}</li>
                    <li>{movie.cast}</li>
                    <li>{movie.releasedate}</li>
                    <li>{movie.duration}</li>
                  </ul>
                </div>




              </div>
              <div className="flex mt-8">
                <a className="flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:scale-105 rounded" rel="noopener noreferrer" href={movie.trailerurl} target="_blank">View Tailor</a>
                <Link to={`/reserve/${movie._id}`} className="flex ml-auto text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:scale-105 rounded">Reserve Ticket</Link>

              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Moviedetails