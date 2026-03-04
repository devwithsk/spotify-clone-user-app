import React from 'react'
import { songsData } from '../assets/assets'

const Controlbar = () => {
  return (
    <div className='h-20 w-full bg-(--var-dark) text-(--var-light) flex items-center'>

        {/* song area */}
        <div className='w-[25%] h-full flex justify-center items-center'>
            <div className='w-[20%] h-[80%] flex justify-center items-center'>
                <img className='w-full h-[90%] rounded-xl' src={songsData[0].image} alt="" />
            </div>
            <div className='w-[60%] h-[80%] flex flex-col ml-2 justify-center'>
                <h3 className='font-semibold text-[0.8rem]'>{songsData[0].name}</h3>
                <p className='text-[0.8rem]'>{songsData[0].desc.slice(0, 20)}...</p>
            </div>
        </div>


        {/* controls */}
        <div className='w-[50%] h-full flex justify-center items-center bg-yellow-200'></div>


    </div>
  )
}

export default Controlbar