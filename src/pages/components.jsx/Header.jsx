import React from 'react'

const Header = () => {
  return (
    <>
    <header className="bg-orange-500 text-3xl flex justify-between px-9 py-5">
 <div>
  Movies
 </div>
 <div>
  <a href="/login" className="mx-4">Login</a>
  <a href="/register" className="ml-4">Register</a>
 </div>
</header>
    </>
  )
}

export default Header