import {React, useRef, useState} from 'react'
import Slides from '../Components/Slides';
import { songsData, albumsData } from '../assets/assets'



const Home = () => {


  return (
    <div className='w-full h-[87%] flex flex-col overflow-y-scroll scroll-smooth pb-10'>


        {/* Trending songs start here */}
        <Slides title="Trending Songs" data={songsData} type="songs"/>


        {/* Top featured charts start here */}
        <Slides title="Featured Charts" data={albumsData} type="albums"/>

    </div>
  )
}

export default Home