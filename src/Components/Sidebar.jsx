import React, { useContext, useState } from 'react'
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";

import { FaPlus } from "react-icons/fa6";
import { RiExpandDiagonalFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaListUl } from "react-icons/fa";
import { FiMusic } from "react-icons/fi";
import { LuDot } from "react-icons/lu";
import { AuthContext } from '../Context/AuthContext';
import {Playlists} from './Playlists';







const Sidebar = () => {


  const [isExpand, setisExpand] = useState(true)
  const {isLogin} = useContext(AuthContext)


  return (
    <aside className='w-[23%] h-full hidden md:flex lg:flex flex-col justify-center items-center bg-(--var-dark)'>
        <div className='w-[95%] h-[98%] bg-(--var-gray2) rounded-2xl flex flex-col'>

          <div className='w-full flex justify-between items-center p-5'>

            <div className='flex justify-center items-center'>
              
              {
                isLogin ? (
                <div>
                {
                  isExpand ? (
                    <TbLayoutSidebarRightExpand onClick={() => setisExpand(false)} className='w-6 h-6 text-(--var-light) cursor-pointer mr-2' />
                  ) : (
                    <TbLayoutSidebarLeftExpand onClick={() => setisExpand(true)} className='w-6 h-6 text-(--var-light) cursor-pointer mr-2' />
                  )
                }
                </div>
                ) : ('')
              }

              
              
              <p className='text-[1rem] font-bold text-(--var-light)'>Your Library</p>
            </div>

            <div className='flex justify-center items-center'>
              
              <div className='w-8 h-8 bg-gray-600 rounded-full flex justify-center items-center cursor-pointer hover:scale-[1.05] duration-200 transition-all'>
                <FaPlus className='text-(--var-gray3) hover:text-(--var-light) transition-all duration-200' />
              </div>
              
              {
                isLogin ? (
                  <RiExpandDiagonalFill className='ml-3 text-2xl text-(--var-gray4) hover:text-(--var-light) cursor-pointer'/>
                ) : ('')
              }

              
            </div>

          </div>
          
          {
            isLogin ? (<Playlists />) : (

              <div className='w-full h-35 mt-5 flex justify-center'>
               <div className='w-75 h-full bg-(--var-gray5) rounded-xl flex flex-col text-white'>
                  <h3 className='text-[0.9rem] font-bold ml-3 mt-4'>Create your first playlist</h3>
                  <p className='text-[0.8rem] font-900 ml-3 mt-2'>It's easy, we'll help you</p>
                  <button className='flex justify-center items-center w-33 h-8 ml-3 mt-5 text-center text-[0.8rem] bg-white text-black font-bold rounded-2xl cursor-pointer hover:scale-105 duration-300 transition-all'>Create Playlist</button>
               </div>
              </div>

            )
          }
          
              
        </div>
    </aside>
  )
}

export default Sidebar