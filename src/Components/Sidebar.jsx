import React, { useState } from 'react'
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";

import { FaPlus } from "react-icons/fa6";
import { RiExpandDiagonalFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaListUl } from "react-icons/fa";
import { FiMusic } from "react-icons/fi";
import { LuDot } from "react-icons/lu";







const Sidebar = () => {


  const [isExpand, setisExpand] = useState(true)


  return (
    <aside className='w-[23%] h-full hidden md:flex lg:flex flex-col justify-center items-center'>
        <div className='w-[95%] h-[98%] bg-(--var-gray2) rounded-2xl flex flex-col'>

          <div className='w-full flex justify-between items-center p-5'>

            <div className='flex justify-center items-center'>
              
              {
                isExpand ? (
                  <TbLayoutSidebarRightExpand onClick={() => setisExpand(false)} className='w-6 h-6 text-(--var-light) cursor-pointer mr-2' />
                ) : (
                  <TbLayoutSidebarLeftExpand onClick={() => setisExpand(true)} className='w-6 h-6 text-(--var-light) cursor-pointer mr-2' />
                )
              }
              
              <p className='text-[1rem] font-bold text-(--var-light)'>Your Library</p>
            </div>

            <div className='flex justify-center items-center'>
              
              <div className='w-8 h-8 bg-gray-600 rounded-full flex justify-center items-center cursor-pointer hover:scale-[1.05] duration-200 transition-all'>
                <FaPlus className='text-(--var-gray3) hover:text-(--var-light) transition-all duration-200' />
              </div>

              <RiExpandDiagonalFill className='ml-3 text-2xl text-(--var-gray4) hover:text-(--var-light) cursor-pointer'/>
            </div>

            </div>

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

          <div className='w-[95%] h-16 ml-[2.5%] flex items-center hover:bg-(--var-gray4) duration-300 transition-all rounded cursor-pointer'>
              <div className='w-[20%] h-[85%] ml-[2.5%] rounded bg-(--var-gray4) flex justify-center items-center'>
                <FiMusic className='text-(--var-light) text-3xl' />
              </div>

              <div className='flex flex-col ml-3 text-(--var-light)'>
                <h3 className='font-bold'>My Playlist #1</h3>
                <span className='flex text-(--var-gray3) text-[0.9rem]'>
                  <p>Playlist</p>
                  <LuDot className='transform -translate-y-0.5 text-bold text-2xl'/>
                  <p>Sonu</p> 
                </span>
                
              </div>
          </div>
              
        </div>
    </aside>
  )
}

export default Sidebar