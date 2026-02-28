import React, { useContext } from 'react'
import Tabs from '../Components/tabs'
import Home from './Home'
import { Routes, Route } from 'react-router-dom' 

const Display = () => {



  return (
    <section className='w-full lg:w-[77%]  h-full bg-(--var-dark) flex flex-col justify-center items-start'>
        <div className='w-full lg:w-[98%] h-full lg:h-[97%] lg:bg-(--var-gray2) lg:rounded-2xl'>

            <Tabs />

            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            
        </div>
    </section>
  )
}

export default Display