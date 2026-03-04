import React from 'react'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Display from './Pages/Display'
import Controlbar from './Components/Controlbar'


const App = () => {
  return (
    
    <div className='w-full h-screen flex flex-col'>
      <Navbar />

      <div className='flex-1 flex overflow-hidden'>
        <Sidebar className='justify-center items-center' />
        <Display className='justify-center items-center' />
      </div>

      <Controlbar />
      
    </div>

    
  )
}

export default App