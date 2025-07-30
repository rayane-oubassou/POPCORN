import React from 'react'
import { assets } from '../assets/assets'
import { ArrowRight, Calendar1Icon, ClockIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {

    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-cover bg-center h-screen'>
      <video
    className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-86"
    autoPlay
    loop
    muted
    playsInline >  <source src="/trailer.webm" type="video/webm" />
      </video>
  <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10"></div>

  <div className="relative z-20 flex flex-col items-start justify-center gap-4 text-white h-full">

<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight max-w-4xl">
  Everything <br /> Everywhere <br /> All at once
</h1>

<div className="flex flex-wrap items-center gap-6 text-sm text-gray-200 pt-2">
  <span>Action | Adventure | Sci-Fi</span>

  <div className="flex items-center gap-1">
    <Calendar1Icon className="w-5 h-5" /> 2022
  </div>

  <div className="flex items-center gap-1">
    <ClockIcon className="w-5 h-5" /> 2h 19m
    </div>
  </div>
  <p className='max-w-md text-gray-300'>When an interdimensional rupture unravels reality, an unlikely hero must channel her newfound powers to fight bizarre and bewildering dangers from the multiverse as the fate of the world hangs in the balance.
  </p>
  <button onClick={()=> navigate('/movies')} className='flex items-center gap-1 px-6 py-3 text-sm bg-amber-400 hover:bg-amber-500 hover:text-black transition rounded-full transtion-colors duration-300
  font-medium cursor-pointer'>
    Explore Movies !
    <ArrowRight className='w-5 h-5'/>
  </button>
</div>
    </div>
  )
}

export default HeroSection