import React from 'react'

function Errorpopup({ setopenPopup }) {
    return (

        <>
            <div className='absolute top-0 h-full w-full z-20 backdrop-blur-md flex justify-center items-center'>
                <div className='bg-blue-100 w-150 h-70 rounded-sm flex justify-center items-center relative'>
                    <p>
                        Location Not Found
                    </p>

                    <i className="ri-close-line absolute top-1 right-1 cursor-pointer text-blue-500 text-2xl cursor-pointer" onClick={() =>setopenPopup(false)}></i>

                </div>

            </div>
        </>
    )
}

export default Errorpopup