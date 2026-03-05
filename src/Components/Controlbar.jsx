import React, { useContext } from 'react'
import { songsData } from '../assets/assets'
import { FaPlayCircle } from "react-icons/fa";
import { FaPauseCircle } from "react-icons/fa";
import { IoPlaySkipBack } from "react-icons/io5";
import { IoPlaySkipForward } from "react-icons/io5";
import { TiArrowShuffle } from "react-icons/ti";
import { BiRepeat } from "react-icons/bi";
import TooltipWrapper from './TooltipWrapper';
import { SongContext } from '../Context/SongContext';



const Controlbar = () => {

    const {isPlay,setIsPlay, play, pause, track, Time, setTime, seekBar, seekBg, seekMusic, nextSong, prevSong} = useContext(SongContext);

  return (
    <div className='h-20 w-full bg-(--var-dark) text-(--var-light) flex justify-between lg:justify-start items-center'>

        {/* song area */}
        <div className='w-[25%] h-full flex justify-center items-center'>
            <div className='w-full lg:w-[25%] h-full flex justify-center items-center'>
                <img className='w-[65%] h-[70%] rounded-xl cursor-pointer' src={track.image} alt="" />
            </div>
            <div className='w-[75%] h-[80%] hidden lg:flex flex-col justify-center'>
                <h3 className='font-semibold text-[0.8rem] cursor-pointer hover:underline'>{track.name}</h3>
                <p className='text-[0.8rem] cursor-pointer hover:underline'>{track.desc.slice(0, 30)}...</p>
            </div>
        </div>


        {/* controls */}
        <div className='w-[70%] lg:w-[50%] mr-2 lg:mr-0 h-full flex-col'>
            <div className='w-full h-1/2 flex justify-center items-center gap-4 lg:gap-5 pt-4 lg:pt-2'>

                <TooltipWrapper text="Shuffle">
                    <TiArrowShuffle className='w-5 h-5 lg:w-6 lg:h-6 cursor-pointer'/>
                </TooltipWrapper>

                <TooltipWrapper text="Previous"><IoPlaySkipBack onClick={prevSong} className='w-5 h-5 lg:w-6 lg:h-6 cursor-pointer'/></TooltipWrapper>
                {isPlay
                ?<TooltipWrapper text="Pause"><FaPauseCircle onClick={pause} className='w-6 h-6 lg:w-8 lg:h-8 cursor-pointer'/></TooltipWrapper>
                :<TooltipWrapper text="Play"><FaPlayCircle onClick={play} className='w-6 h-6 lg:w-8 lg:h-8 cursor-pointer'/></TooltipWrapper>
                }
                

                <TooltipWrapper text="Next"><IoPlaySkipForward onClick={nextSong} className='w-5 h-5 lg:w-6 lg:h-6 cursor-pointer'/></TooltipWrapper>
                <TooltipWrapper text="Repeat"><BiRepeat className='w-5 h-5 lg:w-6 lg:h-6 rotate-180 cursor-pointer'/></TooltipWrapper>

                
                
                
                

            </div>

            <div className='w-full h-1/2 flex justify-center items-center gap-2'>
                <h3 className='text-[0.8rem] text-(--var-gray3)'>{Time.currentTime.minute}:{Time.currentTime.second}</h3>
                <div ref={seekBg} onClick={seekMusic} className='w-[70%] h-1 bg-(--var-gray3) rounded-xl cursor-pointer'>
                    <div ref={seekBar} className='w-[0%] h-full bg-green-500 rounded-xl'></div>
                </div>
                <h3 className='text-[0.8rem] text-(--var-gray3)'>{Time.totalDuration.minute}:{Time.totalDuration.second}</h3>
            </div>

        </div>


    </div>
  )
}

export default Controlbar