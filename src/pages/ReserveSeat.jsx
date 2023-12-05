import React from 'react'

const ReserveSeat = () => {
    let seat = {
        'A': '1,2,3,4,5,6,7,8,9,10',
        'B': '1,2,4,5,6,7,8,9,10',
        'C': '1,2,3,4,5,6,7,8,9,10',
        'D': '1,2,3,5,7,8,9,10',
        'E': '1,2,3,4,5,6,7,8,9,10',
        'F': '1,2,3,4,5,6,7,8,9,10',
    };

    const movie_name = "Animal"

    let elements = [];

    for (let row in seat) {
        let seats = seat[row].split(','); // Splitting seats into an array
        let allSeats = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']; // All possible seats

        allSeats.forEach((seatNumber) => {
            if (seats.includes(seatNumber)) {
                elements.push(
                    <span key={`${row}${seatNumber}`} className="block m-5 w-9">
                        <input type="checkbox" className="w-9 h-9" name={row + seatNumber} />
                        <p className="text-center">{`${row}${seatNumber}`}</p>
                    </span>
                );
            } else {
                elements.push(
                    <span key={`${row}${seatNumber}`} className="block m-5 w-9 bg-red-500 rounded-lg">
                        <input type="checkbox" className="w-9 h-9" disabled />
                        <p className="text-center text-white">{`${row}${seatNumber}`}</p>
                    </span>
                );
            }
        });
    }


    return (
        <div>
            <p className="text-center mt-3">
                <span className="bg-red-500 rounded px-2 text-white">red </span>
                color already reserved</p>

            <form className="flex justify-between" action="">
                <h1 className="absolute left-80 text-3xl">Select seat</h1>
                <div className="md:w-2/3 mt-9 flex justify-center">
                    <h1 className="absolute bg-slate-500 px-80 py-2 text-white">Screen</h1>
                    <div className="flex mt-20 row flex-wrap  border-2 seat">

                        {elements}


                    </div>
                </div>
                <div className="w-1/3 mx-auto p-20 flex flex-col">
                    <h1 className="my-5 text-4xl">{movie_name}</h1>
                    <h1 className="my-5 text-2xl">Select Time</h1>
                    <select className="my-5 text-lg">
                        <option>Select</option>
                        <option>10:00 AM</option>
                        <option>03:00 PM</option>
                        <option>06:00 PM</option>
                    </select>


                    <div className="flex justify-between">

                        <label className="my-5">Price</label>
                        <label className="my-5 text-right">Rs.300</label>
                    </div>
                    <button className="flex text-white text-center bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:scale-105 rounded">Reserve Ticket</button>

                </div>
            </form>
        </div>
    );
}
export default ReserveSeat