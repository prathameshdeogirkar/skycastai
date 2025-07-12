import React from 'react'

function Showaidata({setopenPopup, aiData}) {
    
    return (
        <>
            <div className='absolute top-16 right-0 z-20  '>
                <div className='bg-blue-100 w-100 h-[91vh] rounded-sm  relative'>
                    <i className="ri-close-line absolute top-1 right-1 text-blue-500 text-2xl cursor-pointer " onClick={() => setopenPopup(false)}></i>
                    <div className='mt-3.5'>
                        <p className='text-gray'>{aiData?.summary}</p>

                        <p>{aiData?.health_tips}</p>

                        <p>{aiData?.precautions}</p>

                        <p>{aiData?.what_to_carry}</p>

                        <p>{aiData?.what_to_wear}</p>

                        <p>{aiData?.travel_advice}</p>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Showaidata