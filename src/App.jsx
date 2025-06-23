import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import './index.css'
import Manager from './components/Manager'
import Footer from './components/Footer'
const App = () => {
  return (
   <>
   <Navbar/>
   <div className='min-h-[83vh]'>

   <Manager/>
   </div>
   <Footer/>
   </>
  )
}

export default App
