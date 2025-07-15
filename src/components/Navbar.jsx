import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Navbar() {
  return (
    <>
      <div className='backdrop-blur-2xl w-full h-16 fixed top-0 flex items-center justify-between px-8 shadow-md z-10'>

        <div className='text-3xl font-extrabold text-white'>
          Skycast.<span className='text-sky-400'>AI</span>
        </div>

        <div className='flex items-center gap-2'>
          <i className="ri-search-line text-white text-xl"></i>
          <input
            className='text-black bg-white focus:outline-none focus:ring-2 focus:ring-sky-400 rounded-md h-9 w-64 px-4 text-sm transition-all duration-300'
            type="text"
            placeholder='Search Mood Of Your City'
          />
        </div>

      </div>
    </>
  )
}

export default Navbar
