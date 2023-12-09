import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Addshow = () => {

    const [show, setShow] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API}/showtime`).then(res => {
            console.log(res);
            setShow(res.data);

        }).catch(error => {
            console.log(error);
        })
    }, [])

    const addtime = (e) => {
        e.preventDefault();

        console.log(document.getElementById('time').value);
        const time = document.getElementById('time').value;

        axios.post(`${process.env.REACT_APP_API}/addshow`, {
            time
        }).then(res => {
            console.log(res);
            alert(res.data)
        }).catch(error => {
            console.log(error);
        })
    }
    return (
        <>
            <div className='flex flex-col mt-5 w-full items-start'>

                <form className='flex flex-col' onSubmit={addtime}>
                    <label>Enter time show</label>
                    <input className='border-2 py-3 my-2' id='time' type='text' name='time' placeholder='Enter the time Show'></input>
                    <input type="submit" value="save" className='bg-orange-500 text-white'></input>
                </form>
                <div className='mt-5'>
                    <table>
                        <thead>

                            <tr>
                                <th className='px-5'>S.N</th>
                                <th className='px-5'>Time</th>
                            </tr>
                        </thead>
                        <tbody>

                            {show.map((item, index) => (
                                <tr className='text-center' key={index}>
                                    <td>{index + 1}.</td>
                                    <td>{item.time}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Addshow