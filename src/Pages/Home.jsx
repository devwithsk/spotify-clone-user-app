import {React, useRef, useState} from 'react'
import Slides from '../Components/Slides';
import { songsData, albumsData } from '../assets/assets'
import Tabs from '../Components/Tabs';



const Home = () => {


  return (
    <div className='w-full h-full flex flex-col'>

      <div className='w-full lg:w-[98%] h-[20%] lg:h-[15%] lg:bg-(--var-gray2) lg:rounded-2xl'>
        <Tabs />
      </div>

      <div className='w-full h-[85%] flex flex-col overflow-y-scroll scroll-smooth'>


        {/* Trending songs start here */}
        <Slides title="Trending Songs" data={songsData} type="songs"/>


        {/* Top featured charts start here */}
        <Slides title="Featured Charts" data={albumsData} type="album"/>
        </div>

    </div>
  )
}

export default Home