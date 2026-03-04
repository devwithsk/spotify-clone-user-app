import {React, useRef, useState} from 'react'
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const Slides = ({title, data}) => {

        const songsRef = useRef(null)
    
    
    
        // 2. Arrows ko kab show/hide karna hai uski state
        // Shuru mein hum left side bilkul end par hote hain, isliye left arrow hide rahega (false)
        const [showLeftArrow, setShowLeftArrow] = useState(false);
        // Shuru mein right side scroll karne ki jagah hoti hai, isliye right arrow show hoga (true)
        const [showRightArrow, setShowRightArrow] = useState(true);
    
    
        const handleSongsScroll = () => {
        // Agar ref abhi tak attach nahi hua hai, to wapas jao
            if (!songsRef.current) return;
    
            const { scrollLeft, scrollWidth, clientWidth } = songsRef.current;
    
            // Left arrow tab dikhega jab scrollLeft 0 se bada ho (matlab thoda scroll ho chuka hai)
            setShowLeftArrow(scrollLeft > 0);
    
            // Right arrow tab dikhega jab hum bilkul end tak nahi pahuche hain
            // Hum -1 isliye karte hain taaki decimal pixels ki wajah se bug na aaye
            setShowRightArrow(Math.ceil(scrollLeft + clientWidth) < scrollWidth - 1);
            
        };
    
        const scrollRight = () => {
            if (songsRef.current) {
            const scrollAmount = songsRef.current.clientWidth + 200;
            // scrollBy in-built method hai jo specific amount se scroll karta hai
            songsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        };
    
        const scrollLeft = () => {
            if (songsRef.current) {
            const scrollAmount = songsRef.current.clientWidth - 200;
            // Left jane ke liye minus (-) lagana hota hai
            songsRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
            }
        };


  return (
            <div className='relative w-full h-80 mt-8 group'>
                <div className='flex justify-between items-center'>
                    <h2 className='px-8 font-bold text-(--var-light) text-xl hover:underline cursor-pointer'>{title}</h2>
                    <a href="#" className='text-sm font-semibold text-(--var-gray3) hover:underline mr-8'>Show all</a>
                </div>
                <div 
                ref={songsRef}
                onScroll={handleSongsScroll}
                className='w-full flex gap-4 overflow-x-scroll scroll-smooth p-4'>
    
                    {/* Songs load here */}
    
                    {
                        data.map((song, index) => {
                            return (
                                <div 
                                 key={index}
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

                </div>

                {showLeftArrow && (
                    <button 
                        onClick={scrollLeft} 
                        className='absolute top-1/2 left-5 w-10 h-10 bg-(--var-gray) rounded-full hidden lg:flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-70 transition-opacity duration-300'>
                            <MdArrowBackIosNew className='text-2xl text-white'/>
                        </button>
                    )}      
    
                {showRightArrow && (
                    <button 
                        onClick={scrollRight} 
                        className='absolute top-1/2 left-[93%] w-10 h-10 bg-(--var-gray) rounded-full hidden lg:flex justify-center items-center cursor-pointer opacity-0 group-hover:opacity-70 transition-opacity duration-300'>
                            <MdArrowForwardIos className='text-2xl text-white'/>
                        </button>
                    )}

            </div>
  )
}

export default Slides