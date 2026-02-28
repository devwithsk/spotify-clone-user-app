import {React, useRef, useState} from 'react'
import { songsData } from '../assets/assets'
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";



const Home = () => {

    const scrollRef = useRef(null)

    // 2. Arrows ko kab show/hide karna hai uski state
    // Shuru mein hum left side bilkul end par hote hain, isliye left arrow hide rahega (false)
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    // Shuru mein right side scroll karne ki jagah hoti hai, isliye right arrow show hoga (true)
    const [showRightArrow, setShowRightArrow] = useState(true);


    const handleScroll = () => {
    // Agar ref abhi tak attach nahi hua hai, to wapas jao
        if (!scrollRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

        // Left arrow tab dikhega jab scrollLeft 0 se bada ho (matlab thoda scroll ho chuka hai)
        setShowLeftArrow(scrollLeft > 0);

        // Right arrow tab dikhega jab hum bilkul end tak nahi pahuche hain
        // Hum -1 isliye karte hain taaki decimal pixels ki wajah se bug na aaye
        setShowRightArrow(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);
        
    };

    const scrollRight = () => {
        if (scrollRef.current) {
        const scrollAmount = scrollRef.current.clientWidth + 200;
        // scrollBy in-built method hai jo specific amount se scroll karta hai
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    const scrollLeft = () => {
        if (scrollRef.current) {
        const scrollAmount = scrollRef.current.clientWidth - 200;
        // Left jane ke liye minus (-) lagana hota hai
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };


  return (
    <div className='w-full h-full flex flex-col'>
        <div className='w-full h-80'>
            <h2 className='px-8 font-bold text-(--var-light) text-xl'>Trending Songs</h2>
            <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className='relative w-full mt-2 flex gap-4 overflow-x-scroll scroll-smooth p-4'>

                {/* Songs load here */}

                {
                    songsData.map((song, index) => {
                        return (
                            <div 
                             key={index}
                             onClick={scrollRight}
                             className='min-w-50 w-50 h-full flex flex-col py-4 justify-center items-center cursor-pointer rounded hover:scale-[1.01] hover:bg-(--var-gray5) transition-all duration-300'>
                                <div className='w-[80%] h-[60%]'>
                                    <img className='rounded-lg shadow-2xl' src={song.image} alt="" />
                                </div>
                                <div className='w-[85%] h-[30%] mt-2 ml-4'>
                                    <h3 className='font-bold text-(--var-light) hover:underline'>{song.name}</h3>
                                    <p className='text-(--var-light) text-md hover:underline'>{song.desc.slice(0, 30)}...</p>
                                </div>
                            </div>
                        )
                    })
                }



                    {showLeftArrow && (
                        <button 
                        onClick={scrollLeft} 
                        className='w-10 h-10 bg-(--var-gray) fixed rounded-full translate-y-30 translate-x-5 text-white flex justify-center items-center group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'>
                            <MdArrowBackIosNew className='text-2xl'/>
                        </button>
                    )}

                    {showRightArrow && (
                        <button 
                        onClick={scrollRight} 
                        className='w-10 h-10 bg-(--var-gray) fixed rounded-full translate-y-30 translate-x-248 text-white flex justify-center items-center group-hover:opacity-100 transition-opacity duration-300 cursor-pointer'>
                            <MdArrowForwardIos className='text-2xl'/>
                        </button>
                    )}


                   
                

            </div>
        </div>
    </div>
  )
}

export default Home