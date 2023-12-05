import React from 'react'

const card_model = () => {
  return (
    <>
    
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full  hover:scale-105">
        <a className="block relative rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://cineplexmovie.com/Modules/CineUploadFiles/Movie/image/Animal_310x390_499364.jpg" />
        </a>
        <div>
          <h2 className="text-gray-900 title-font text-3xl py-2 font-medium text-center bg-orange-500 text-white">Animal</h2>
        </div>
      </div>
    </>
  )
}

export default card_model