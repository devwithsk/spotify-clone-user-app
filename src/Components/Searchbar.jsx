import React from 'react'
import { IoSearchSharp } from "react-icons/io5";

const Searchbar = () => {
  return (
    <div className='w-90 h-10 ml-5 rounded-4xl bg-(--var-gray) hidden lg:flex justify-center items-center hover:scale-102 duration-300 transition-all'>
                <div className='w-[15%] flex justify-center'>
                    <IoSearchSharp className='text-(--var-light) text-2xl' />
                </div>
                <div className='w-[80%]'>
                    <input className='border-none outline-none text-(--var-light)' type="text" placeholder='What do you want to play?' />
                </div>
            </div>
  )
}

export default Searchbar