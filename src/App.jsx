import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'


const App = () => {
  return (
    <div className='w-full h-screen flex flex-col'>
      <Navbar />

      <div className='flex-1 flex overflow-hidden'>
        <Sidebar className='justify-center items-center' />
      </div>

      <div className='h-15 w-full bg-(--var-dark) text-(--var-light) flex items-center justify-center'>
        Music Control Bar (Play/Pause, Timeline, etc. yahan aayega)
      </div>
      
    </div>

    
  )
}

export default App