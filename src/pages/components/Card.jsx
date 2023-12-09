import { Link } from "react-router-dom"

const Card = ({ image, name, link }) => {

  return (
    <>

      <div className="lg:w-1/5 md:w-1/3 p-5 w-full  hover:scale-105">
        <Link className="block relative rounded overflow-hidden" to={`/details/${link}`}>
          <img alt={name} className="w-full h-96 block" src={image} />
        </Link>
        <div>
          <h2 className="title-font text-3xl py-2 font-medium text-center bg-orange-500 text-white rounded">{name}</h2>
        </div>
      </div>
    </>
  )
}

export default Card