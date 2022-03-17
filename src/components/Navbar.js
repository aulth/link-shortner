import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    <div className="w-full box-border p-5 flex bg-gray-800 text-white justify-between">
        <Link to="/">LinkShortner</Link>
        <nav>
            <ul className="flex">
                <Link to="/about" className='mx-1 cursor-pointer'>About</Link>
                <Link to="/contact" className='mx-1 cursor-pointer'>Contact</Link>
            </ul>
        </nav>
    </div>
    </>
  )
}

export default Navbar