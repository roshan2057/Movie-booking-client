import { Link } from "react-router-dom"

const Card = ({ image, name, link }) => {

  return (
    <>

      <div className="lg:w-1/4 md:w-1/2 p-4 w-full  hover:scale-105">
        <Link className="block relative rounded overflow-hidden" to={`/details/${link}`}>
          <img alt={name} className="w-full h-96 block" src={image} />
        </Link>
        <div>
          <h2 className="text-gray-900 title-font text-3xl py-2 font-medium text-center bg-orange-500 text-white rounded">{name}</h2>
        </div>
      </div>
    </>
  )
}

export default Card