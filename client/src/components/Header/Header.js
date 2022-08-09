import React from 'react'
import {GiConsoleController} from 'react-icons/gi'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header>
    <div className='shadow-md w-full top-0 left-0'>
        <div className='md:flex bg-white py-4 md:px-10 px-7'>
        <div className='font-bold text-2x1 cursor-pointer flex items-center font-[Poppins] text-gray-800'>
            <span className='text-3x1 text-indigo-600 mr-1 pt-2'>
                <GiConsoleController />
            </span>
            collector
        </div>
        <NavLink to='/'>
            Home
        </NavLink>
        <NavLink to='/new'>
            Add New Game
        </NavLink>
        </div>
    </div>
    </header>
  )
}

export default Header