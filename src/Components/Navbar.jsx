import React from 'react'
import { GoHomeFill } from "react-icons/go";
import Searchbar from './Searchbar';
import Logo from './Logo';
import User from './User';
import { useNavigate } from 'react-router-dom';





const Navbar = () => {

  const navigate = useNavigate();



  return (
    <div className='w-full bg-(--var-dark) h-16 flex justify-between'>

        {/* logo */}
        <div className='flex justify-center items-center'>
          <Logo />
          <h1 className='hidden md:block lg:block text-(--var-light) ml-2 text-2xl font-bold'>Spotify</h1>
        </div>
        
      
        <div className='flex justify-center items-center'>

            {/* Home button */}
            <div className='w-13 h-13 rounded-full hidden lg:flex justify-center items-center bg-(--var-gray) cursor-pointer hover:scale-[1.05] duration-300 transition-all'>
                <GoHomeFill onClick={() => navigate("/")} className='text-(--var-light) text-2xl'/>
            </div>

            <Searchbar />

        </div>

        <div className='flex justify-center items-center'>
          <User />
        </div>
            
        

    </div>
  )
}

export default Navbar