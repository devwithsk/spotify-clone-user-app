import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div className='w-100 h-[80%] ml-5 rounded-4xl bg-(--var-gray) hidden lg:flex justify-center items-center hover:scale-102 duration-300 transition-all'>
                <div className='w-[15%] flex justify-center'>
                    <IoSearchSharp className='text-(--var-light) text-2xl' />
                </div>
                <div className='w-[85%]'>
                    <input className='w-[80%] border-none outline-none text-lg text-(--var-light)' type="text" placeholder='What do you want to play?' />
                </div>
            </div>
  )
}

export default Searchbar