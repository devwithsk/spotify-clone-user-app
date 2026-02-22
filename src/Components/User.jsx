import React, { useState } from 'react'

const User = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    

  return (
    <div className='flex justify-center items-center'>

        {
            isLoggedIn ? (
                
                    // user profile icon
                    <div className='w-10 h-10 rounded-full bg-purple-500 ml-5 flex justify-center items-center mr-8 cursor-pointer'>
                        <p className='font-bold text-2xl'>S</p>
                    </div>

            ) : (

                // user logon or sign buttons
                <div className='text-(--var-light) mr-5 lg:mr-8 cursor-pointer'>
                    <a href="#" className='hover:font-bold duration-300 transition-all'>Sign up</a>
                    <a href="#" className='inline-block bg-(--var-light) text-(--var-dark) font-bold rounded-4xl px-7 py-3 ml-5 hover:scale-[1.05] duration-300 transition-all'>Login</a>
                </div>

                

            )
        }


    </div>
  )
}

export default User