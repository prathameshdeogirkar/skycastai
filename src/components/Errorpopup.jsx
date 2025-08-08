import React from 'react'

function Errorpopup({ setopenPopup }) {
    return (

        <>
            <div className='absolute top-0 h-full w-full z-20 backdrop-blur-md flex justify-center items-center'>
                <div className='bg-sky-300 h-60 w-100 rounded-2xl flex justify-center items-center text-white text-center relative'>
                    <p className='text-3xl font-bold'>
                        Location Not Found
                    </p>

                    <i className="ri-close-line absolute top-1 right-1 text-blue-500 text-3xl font-bold cursor-pointer" onClick={() =>setopenPopup(false)}></i>

                </div>

            </div>
        </>
    )
}

export default Errorpopup