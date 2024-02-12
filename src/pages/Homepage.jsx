import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import axios from "axios";

const Homepage = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/listmovies`)
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <h1 className="mt-9 pl-8 text-4xl font-medium"> Nows Showing</h1>

      <section className="text-gray-600 body-font">
        <div className="container py-8 mx-auto">
          <div className="flex flex-wrap m-1 lg:justify-between justify-evenly">
            {movie.map((item, index) => (
              <Card
                key={index}
                image={item.imageurl}
                name={item.title}
                link={item._id}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Homepage;
