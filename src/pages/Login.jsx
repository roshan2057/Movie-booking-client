import axios from 'axios';
import React from 'react';
import cookies from 'js-cookie';

const Login = () => {
    const login = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        axios.post(`${process.env.REACT_APP_API}/login`, {
            email,
            password
        }).then(res => {
            if (!res.data.token) {
                return alert(res.data);
            }
            cookies.set("token", res.data.token);
            window.location.href = "/"
        }).catch(error => {
            console.error(error);
        })
    }
    return (
        <>
            <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
                <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                    <form onSubmit={login}>
                        <h1 className="font-bold text-center text-2xl mb-5">Login ..</h1>
                        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                            <div className="px-5 py-7">
                                <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                                <input type="text" name='email' className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                                <label className="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
                                <input type="text" name='password' className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                                <button type="submit" className="transition duration-200 bg-orange-500 hover:bg-orange-600 focus:shadow-sm focus:ring-4 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                                    <span className="inline-block mr-2">Login</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </button>
                            </div>

                        </div>
                        <div className="py-5">
                            <div className="grid grid-cols-2 gap-1">
                                <div className="text-center sm:text-left whitespace-nowrap">
                                    <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                        </svg>
                                        <a href='/' className="inline-block ml-1">Back to Homepage</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login