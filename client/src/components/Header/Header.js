import React,{useState} from 'react'
import {GiConsoleController} from 'react-icons/gi'
import {FaBars} from 'react-icons/fa'
import {NavLink} from 'react-router-dom'


const Header = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <NavLink
            className="text-xl font-bold leading-relaxed flex mr-4 py-3 whitespace-nowrap uppercase text-white"
            to="/"
          >
            Collector Games <span className='px-4 py-1'><GiConsoleController /></span>
          </NavLink>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <NavLink className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to='/'>
                Home
            </NavLink>
            <NavLink className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to='/games/new'>
                Add New Game
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  </>

  )
}

export default Header