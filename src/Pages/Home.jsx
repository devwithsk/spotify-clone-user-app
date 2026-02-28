import React from 'react'
import { songsData } from '../assets/assets'

const Home = () => {

    const {name, image, desc} = songsData[0]
    console.log(image)


  return (
    <div className='w-full h-full flex flex-col'>
        <div className='w-full h-80'>
            <h2 className='px-8 font-bold text-(--var-light) text-xl'>Trending Songs</h2>
            <div className='w-full mt-2 flex gap-4 overflow-x-scroll p-4'>

                {/* Songs load here */}

                {
                    songsData.map((song, index) => {
                        return (
                            <div 
                             key={index}
                             className='min-w-60 w-60 h-full flex flex-col py-4 justify-center items-center cursor-pointer rounded hover:scale-[1.01] hover:bg-(--var-gray5) transition-all duration-300'>
                                <div className='w-[80%] h-[60%]'>
                                    <img className='rounded-lg shadow-2xl' src={song.image} alt="" />
                                </div>
                                <div className='w-[85%] h-[30%] mt-2 ml-4'>
                                    <h3 className='font-bold text-(--var-light) hover:underline'>{song.name}</h3>
                                    <p className='text-(--var-light) text-md hover:underline'>{song.desc.slice(0, 30)}...</p>
                                </div>
                            </div>
                        )
                    })
                }

                

                

            </div>
        </div>
    </div>
  )
}

export default Home