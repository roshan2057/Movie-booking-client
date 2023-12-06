import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <header className="bg-orange-500 text-3xl flex justify-between px-9 py-5">
 <div>
  <NavLink to='/'>

  Movies
  </NavLink>
 </div>
 <div>
  <NavLink to="/login" className="mx-4">Login</NavLink>
  <NavLink to="/register" className="ml-4">Register</NavLink>
 </div>
</header>
    </>
  )
}

export default Header