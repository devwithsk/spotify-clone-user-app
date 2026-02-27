import React from 'react'
import { songsData } from '../assets/assets'

const Display = () => {

    const {name, image, desc} = songsData[0]
    console.log(image)


  return (
    <div className='w-full h-full flex flex-col'>
        <div className='w-full h-80'>
            <h2 className='px-8 font-bold text-(--var-light) text-xl'>Trending Songs</h2>
            <div className='w-full h-[90%] mt-3 ml-5'>
                <div className='w-50 h-full bg-amber-300 flex flex-col justify-center items-center'>
                    <div className='w-[85%] h-[60%]'>
                        <img className='rounded-lg shadow-2xl' src={image} alt="" />
                    </div>
                    <div className='w-[85%] h-[30%] bg-green-300'>
                        <h3>{name}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Display