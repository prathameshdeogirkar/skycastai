import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Navbar() {
  return (
<>
    <div className='backdrop-blur-2xl w-screen h-15 absolute flex items-center justify-between gap-1 z-5'>

      <div className='text-2xl font-bold text-white'>Skycast.<span className='text-sky-400'>AI</span></div>

      <div>
        <span>
          
        </span>
        <input className='text-black bg-white border-none rounded-md h-7 w-70 px-5 text-center text-sm ' type="text" placeholder='Search Mood Of Your City' />
      </div>
    </div>
</>
    
  )
}

export default Navbar   