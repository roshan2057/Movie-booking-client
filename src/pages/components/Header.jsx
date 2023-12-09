import React from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';

const Header = () => {
  const hasToken = () => {
    return !!Cookies.get('token');
  };

  return (
    <>
      <header className="bg-orange-500 lg:text-4xl mobile:text-lg flex justify-between items-end px-9 py-5">
        <div>
          <NavLink to='/'>

            <img src='/logo2.jpg' alt='logo' className='w-28 rounded-full'></img>
          </NavLink>
        </div>
        <div>
          {hasToken() ? (
            <NavLink to="/profile/details" className="  text-[15px]"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 24" stroke-width="2" stroke="white" class="w-14 h-14 absolute top-3 right-8">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>Profile
            </NavLink>

          ) : (
            <>
              <NavLink to="/login" className="mx-4">Login</NavLink>
              <NavLink to="/register" className="ml-4">Register</NavLink>
              <NavLink to="/admin/addtime" className="ml-4">Admin</NavLink>
            </>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
