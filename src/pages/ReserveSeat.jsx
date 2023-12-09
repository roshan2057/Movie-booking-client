import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReserveSeat = () => {
    const [reservedSeats, setSeat] = useState(['']);
    const [time, setTime] = useState([]);
    const [movieName, setName] = useState();

    const { id } = useParams();

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/reserve/${id}`,{
            headers:{
                token: Cookies.get('token')
              }})
            .then(res => {
                setTime(res.data.data);
                setName(res.data.movieName);
                setSeat(res.data.data[0].rows);
            })
            .catch(error => {
                
                window.location.href='/login'
                console.log(error);
            });
    }, [id]);

    const reserve = (e) => {
        e.preventDefault();

        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const showtimeID = document.getElementById("time").value;

        const seat = Array.from(checkboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.name);

            if(seat.length === 0){
                return alert("select atleat 1 seat")
            }

        axios.post(`${process.env.REACT_APP_API}/reserveseat`, {
            movieID: id,
            seat,
            showtimeID: showtimeID
        },{
            headers:{
                token: Cookies.get('token')
              }
        })
            .then(res => {

              alert("Seat reserved Sucessfully........")
                window.location.href="/profile/seat";
            })
            .catch(error => {
                window.location.href="/login";

                console.error(error);
            });
    };



    const rows = ['A', 'B', 'C', 'D', 'E'];
    const columns = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

    const elements = rows.map(row => {
        const rowElements = columns.map(column => {
            const seatNumber = `${row}${column}`;
            const isReserved = reservedSeats.includes(seatNumber);
            const seatStyle = isReserved ? 'bg-red-500' : '';
            const isChecked = isReserved ? false : undefined;

            return (
                <span key={seatNumber} className={`block m-5 w-9 ${seatStyle}`}>
                    <input type="checkbox" className="w-9 h-9" checked={isChecked} name={seatNumber} disabled={isReserved} />
                    <p className={`text-center ${isReserved ? 'text-white' : ''}`}>{seatNumber}</p>
                </span>
            );
        });

        return (
            <div key={row} className="flex mt-4 row flex-wrap seat">
                {rowElements}
            </div>
        );
    });

    const handleTimeChange = (e) => {
        const selectedIndex = e.target.selectedIndex;
        
        setSeat(time[selectedIndex].rows);
        // refresh the all input type checkbox only in here....
    };

    return (
        <div>
            <p className="text-center mt-3">
                <span className="bg-red-500 rounded px-2 text-white">Red</span> color already reserved
            </p>
            <h1 className="text-3xl pl-5">Select seat</h1>
            <form className="flex justify-between" onSubmit={reserve} method='post'>
                <div className="pt-20  relative ml-20 flex items-center flex-col border-2">
                    <h1 className="absolute bg-slate-500 px-80 py-2 text-white top-9 w-fit ">Screen</h1>
                    {elements}
                </div>
                <div className="w-1/3 mx-auto p-20 flex flex-col">
                    <h1 className="my-5 text-4xl">{movieName}</h1>
                    <h1 className="my-5 text-2xl">Select Time</h1>
                    <select className="my-5 text-lg" onChange={handleTimeChange} id='time'>
                        {time.map((item, index) => (
                            <option value={item.id} key={index}>{item.time}</option>
                        ))}
                    </select>
                   
                    <button className="flex text-white text-center bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:scale-105 rounded">Reserve Ticket</button>
                </div>
            </form>
        </div>
    );
};

export default ReserveSeat;
