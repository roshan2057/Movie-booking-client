import { NavLink } from 'react-router-dom'
import React from 'react'

const AdminHeader = () => {
  return (
    <>
      <header className="bg-orange-500 lg:text-3xl flex justify-between px-9 py-5">
        <div>
          <NavLink to='/'>

            Movies
          </NavLink>
        </div>
        <div className='lg:text-xl text-sm'>
          This is no any authentication in admin route as it is not described in task.
        </div>
      </header>
    </>
  )
}

export default AdminHeader