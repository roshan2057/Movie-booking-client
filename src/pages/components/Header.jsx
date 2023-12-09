import React from 'react';
import { NavLink } from 'react-router-dom';
import Cookies from 'js-cookie';

const Header = () => {
  const hasToken = () => {
    return !!Cookies.get('token');
  };

  return (
    <>
      <header className="bg-orange-500 lg:text-4xl mobile:text-lg flex justify-between px-9 py-5">
        <div>
          <NavLink to='/'>
            Movies
          </NavLink>
        </div>
        <div>
          {hasToken() ? (
            <NavLink to="/profile/details" className="ml-4">Profile</NavLink>

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
