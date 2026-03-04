import React, { useState } from 'react'

const TooltipWrapper = ({text, children}) => {

    const [isVisible, setisVisible] = useState(false)


  return (
    <div 
    className='relative flex justify-center items-center'
    onMouseEnter={() => setisVisible(true)}
    onMouseLeave={() => setisVisible(false)}
    >
        {children}

        {isVisible && (
            <div className='absolute -top-8 left-1/2 -translate-x-1/2 bg-(--var-gray) px-2 rounded text-sm font-semibold shadow-[0_8px_16px_rgba(0,0,0,0.3)] z-50 text-white'>{text}</div>
        )}
    </div>
  )
}

export default TooltipWrapper