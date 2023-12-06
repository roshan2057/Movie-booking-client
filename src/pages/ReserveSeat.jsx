import React from 'react';

const ReserveSeat = () => {
    const movieName = "Animal";
    const rows = ['A', 'B', 'C', 'D', 'E'];
    const columns = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10','11'];

    const reservedSeats = ['D2', 'A4', 'D8', 'E3', 'A4','A5']; // Array of reserved seats

    const elements = rows.map(row => {
        const rowElements = columns.map(column => {
            const seatNumber = `${row}${column}`;
            const isReserved = reservedSeats.includes(seatNumber);
            const seatStyle = isReserved ? 'bg-red-500' : '';

            return (
                <span key={seatNumber} className={`block m-5 w-9 ${seatStyle}`}>
                    <input type="checkbox" className="w-9 h-9" name={seatNumber} disabled={isReserved} />
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

    return (
        <div>
            <p className="text-center mt-3">
                <span className="bg-red-500 rounded px-2 text-white">Red</span> color already reserved
            </p>

                <h1 className="text-3xl pl-5">Select seat</h1>
            <form className="flex justify-between" action="">
                <div className="pt-20  relative ml-20 flex items-center flex-col border-2">
                    <h1 className="absolute bg-slate-500 px-80 py-2 text-white top-9 w-fit ">Screen</h1>
                    {elements}
                </div>
                <div className="w-1/3 mx-auto p-20 flex flex-col">
                    <h1 className="my-5 text-4xl">{movieName}</h1>
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
};

export default ReserveSeat;
