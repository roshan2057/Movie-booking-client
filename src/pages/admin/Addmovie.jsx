import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Addmovie = () => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/showtime`).then(res => {
      console.log(res.data);
      setShow(res.data);
    }).catch(error => {
      console.log(error)
    })
  }, [])

  const addmovie = (event) => {
    event.preventDefault();
    const movieData = {
      title: document.getElementById("title").value,
      genre: document.getElementById("genre").value,
      description: document.getElementById("description").value,
      director: document.getElementById("director").value,
      cast: document.getElementById("caste").value,
      release_date: document.getElementById("release_date").value,
      duration: document.getElementById("duration").value,
      imageurl: document.getElementById("imageurl").value,
      trailerurl: document.getElementById("trailerurl").value,
    };
    const checkboxes = document.querySelectorAll('input[name="showtime"]');

    const checkedTimes = Array.from(checkboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.value);
    console.log('Checked showtimes:', checkedTimes);


    movieData.showtime = checkedTimes;
    if (checkedTimes.length === 0) {
      return alert("select show time");
    }

    axios.post(`${process.env.REACT_APP_API}/addmovie`, {
      movieData
    }).then(res => {
      console.log(res);
      alert(res.data)
      window.location.href = "/";
    }).catch(error => {
      console.log(error);
    })


  }
  return (
    <>

      <div className='flex md:flex-row flex-col mt-5 w-full items-start'>
        <form className='flex flex-col ml-10 mb-9' onSubmit={addmovie}>
          <label>Title</label>
          <input className='border-2' name='title' type='text' id='title' placeholder='Enter Movie Name' required></input>
          <label>Genre</label>
          <input className='border-2' name='genre' type='text' id='genre' placeholder='Enter the Genre' required></input>
          <label>Description</label>
          <textarea className='border-2 h-20' name='description' type='text' id='description' placeholder='Enter Description' required></textarea>
          <label>Director</label>
          <input className='border-2' name='director' type='text' id='director' placeholder='Enter Director Name' required></input>
          <label>Cast</label>
          <input className='border-2' name='cast' type='text' id='caste' placeholder='Name of the Actors' required></input>
          <label>Release Date</label>
          <input className='border-2' name='release_date' type='text' id='release_date' placeholder='Release Date' required></input>
          <label>Duration</label>
          <input className='border-2' name='duration' type='text' id='duration' placeholder='Enter Film time duration' required></input>
          <label>Image Url</label>
          <input className='border-2' name='imageurl' type='text' id='imageurl' placeholder='Enter Poster image url' required></input>
          <label>Trailer Url</label>
          <input className='border-2' name='trailerurl' type='text' id='trailerurl' placeholder='Youtube trailer url' required></input>
          <label>Movie Show Time</label>
          {show.map((item, index) => (
            <span key={index}>
              <input className='border-2' name='showtime' id='time' value={item._id} type='checkbox'></input>{item.time}

            </span>
          ))}



          <input type='submit' className='border-2 mt-2' value='Save'></input>
        </form>
        <div className='flex justify-center items-center h-40 md:ml-96 ml-0' >
          <span>You can take the refrence data from <a href="https://cineplexmovie.com/Home.aspx" target='_blank' rel='noreferrer' className='text-blue-400'>here... </a>
            Just click any movie from there and get the data
          </span>
        </div>
      </div>
    </>
  )
}

export default Addmovie