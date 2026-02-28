import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaListUl } from "react-icons/fa";
import { FiMusic } from "react-icons/fi";
import { LuDot } from "react-icons/lu";
import { AuthContext } from '../Context/AuthContext';
import {PlaylistItems} from '../assets/assets';



export const Playlists = () => {
  return (
    <>
        <div className='ml-5 w-20 h-8 bg-(--var-gray4) rounded-2xl flex justify-center items-center hover:bg-slate-700 duration-150 transition-all'>
              <p className='text-(--var-light) cursor-pointer'>Playlists</p>
          </div>

          <div className='w-[90%] h-10 m-[5%] flex justify-between items-center'>
            <div>
                <CiSearch className='text-(--var-light) text-2xl' />
            </div>

            <div className='flex justify-center items-center cursor-pointer'>
              <p className='text-(--var-gray3) font-bold text-[1rem] mr-3'>Recents</p>
              <FaListUl className='text-(--var-gray3)'/>
            </div>
          </div>

          {/* plalist items start here */}

          <div className='w-full h-full mb-2 overflow-y-scroll'>

          {

              PlaylistItems.map((item, index) => {
                
                 return (
                  <div key={index} 
                  className='w-[95%] h-16 ml-[2.5%] mt-2 flex items-center hover:bg-(--var-gray4) duration-300 transition-all rounded cursor-pointer'>
                  <div className='w-[20%] h-[85%] ml-[2.5%] rounded bg-(--var-gray4) flex justify-center items-center'>
                    <FiMusic className='text-(--var-light) text-3xl' />
                  </div>

                  <div className='flex flex-col ml-3 text-(--var-light)'>
                    <h3 className='font-bold'>{item.name} #{item.id}</h3>
                    <span className='flex text-(--var-gray3) text-[0.8rem]'>
                      <p>Playlist</p>
                      <LuDot className='transform -translate-y-0.5 text-bold text-2xl -ml-1'/>
                      <p className='-ml-1'>Sonu</p> 
                    </span>
                    
                  </div>
              </div>
                 )


              })


          }
          </div>

        


         

          

          
    </>
  )
}