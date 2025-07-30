import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import { Toaster } from 'react-hot-toast'
import Footer from './Components/Footer'
import Home from './pages/Home'

const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin')
  return (
    
    <>
    
      <Toaster /> 
      {!isAdminRoute && <Navbar/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Movies' element={<Movies/>}/>
        <Route path='/movies/:id' element={<MovieDetails/>}/>
        <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
        <Route path='/MyBookings' element={<MyBookings/>}/>
        <Route path='/Favorites' element={<Favorite/>}/>
      </Routes>
      {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App