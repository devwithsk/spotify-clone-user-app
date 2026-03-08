import React from 'react'
import { useParams } from 'react-router-dom'
import { albumsData } from '../assets/assets';

const Album = () => {

    const params = useParams()
    const id = params.id;
    console.log(id);
    console.log(albumsData[id].bgColor);
    
    

  return (
    <>
    <div className={`flex flex-col md:flex-row items-end gap-6 p-8 bg-linear-to-b from-[${albumsData[id].bgColor}] to-[#121212] h-auto md:h-80`}>
    <img src={albumsData[id].image} className="w-52 h-52 shadow-[0_4px_60px_rgba(0,0,0,0.5)]" />
    <div className="flex flex-col gap-2">
        <p className="text-sm font-bold uppercase">Public Playlist</p>
        <h1 className={`text-5xl md:text-8xl bg-[#2a4365]`}>{albumsData[id].bgColor}</h1>
        <p className="text-[#b3b3b3] mt-2 text-sm">{albumsData[id].desc}</p>
        <div className="flex items-center gap-2 text-sm mt-1">
            <span className="font-bold">Spotify</span> • 1,15,00 saves • {albumsData.length} songs, about 3 hr 15 min
        </div>
    </div>
</div>

    </>

  )
}

export default Album