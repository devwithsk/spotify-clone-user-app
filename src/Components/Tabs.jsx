import React from 'react'

const Tabs = () => {
  return (
    <div className='w-full h-20 rounded-tabs flex justify-start items-center'>
        <div className='h-1/2 px-5 text-sm font-bold'>
            <span className='ml-2 bg-(--var-light) text-(--var-dark) px-3    py-2 rounded-4xl cursor-pointer'>All</span>
            <span className='ml-2 bg-(--var-gray5) text-(--var-light) px-3    py-2 rounded-4xl cursor-pointer'>Music</span>
            <span className='ml-2 bg-(--var-gray5) text-(--var-light) px-3    py-2 rounded-4xl cursor-pointer'>Podcasts</span>
        </div>
    </div>
  )
}

export default Tabs