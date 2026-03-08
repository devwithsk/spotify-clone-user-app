import React, { useContext } from 'react'
import Tabs from '../Components/Tabs'
import Home from './Home'
import { Routes, Route } from 'react-router-dom' 
import Album from './Album'
import { albumsData } from '../assets/assets'

const Display = () => {



  return (
    <section className='w-full lg:w-[77%]  h-full bg-(--var-dark) flex flex-col justify-center items-start'>
        <div className='w-full lg:w-[98%] h-full lg:h-[97%] lg:bg-(--var-gray2) lg:rounded-2xl'>

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/album/:id' element={<Album />} />
            </Routes>
            
        </div>
    </section>
  )
}

export default Display