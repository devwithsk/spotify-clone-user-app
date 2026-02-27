import React, { useContext } from 'react'
import Tabs from '../Components/tabs'
import Display from './Display'

const Home = () => {



  return (
    <section className='w-full lg:w-[77%]  h-full bg-(--var-dark) flex flex-col justify-center items-start'>
        <div className='w-[98%] h-[97%] bg-(--var-gray2) rounded-2xl'>

            <Tabs />
            <Display />
            
        </div>
    </section>
  )
}

export default Home