import React from 'react'
import "../../src/index.css";
import "../../src/App.css"

function Showaidata({ setopenPopup, aiData }) {

    if (!aiData) return null;

    const {
        summary,
        precautions,
        what_to_wear,
        what_to_carry,
        health_tips,
        travel_advice,
    } = aiData;

    return (
        <>
            <div className='relative top-8 right-0 z-20 h-[91vh] w-screen overflow-y-scroll scrollbar-hide'>

                 <i
                        className="ri-close-line fixed top-16 right-6 text-blue-500 text-3xl cursor-pointer hover:text-blue-700 z-30 "
                        onClick={() => setopenPopup(false)}
                    ></i>

                <div className='backdrop-blur-2xl sm:w-[400px] h-[91vh] rounded-md p-5  absolute top-0 right-0 overflow-y-scroll scrollbar-hide '>

                   

                    <h2 className='text-2xl font-bold text-white mb-4'>🌦️ Weather Summary</h2>
                    <p className='text-blue-400 mb-6 text-lg text'>{summary}</p>

                    <div className='mb-4'>
                        <h3 className='text-xl font-semibold  text-white mb-2'>⚠️ Precautions</h3>
                        <ul className='list-disc list-inside text-blue-200 mb-6 space-y-1'>
                            {precautions?.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='mb-4'>
                        <h3 className='text-xl font-semibold  text-white mb-2'>👕 What to Wear</h3>
                        <ul className='list-disc list-inside text-blue-200 mb-6 space-y-1'>
                            {what_to_wear?.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='mb-4'>
                        <h3 className='text-xl font-semibold  text-white mb-2'>🎒 What to Carry</h3>
                        <ul className='list-disc list-inside text-blue-200 mb-6 space-y-1'>
                            {what_to_carry?.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className='mb-4'>
                        <h3 className='text-xl font-semibold  text-white mb-2'>❤️ Health Tips</h3>
                        <ul className='list-disc list-inside text-blue-200 mb-6 space-y-1'>
                            {health_tips?.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    

                    <div className='mb-4'>
                        <h3 className='text-xl font-semibold  text-white mb-2'>🧭 Travel Advice</h3>
                        <p className='text-blue-200 mb-6'>{travel_advice}</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Showaidata;
