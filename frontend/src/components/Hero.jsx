import React from 'react'
import img from '../assets/images/bg2.jpg'
import { Link } from 'react-router-dom'

const styleImg = {
    backgroundImage: `linear-gradient(rgba(51, 33, 0, 0.8), rgba(51, 33, 0, 0.8)), url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
}

const Hero = () => {
  return (
    <div style={styleImg} className=' h-[70vh] flex justify-center sm:items-center items-end font-Jomolhari text-white'>
        <div className='sm:p-0 px-2'>
            <div className="sm:-space-y-7 sm:text-[75px] text-[35px]">
                <p className='sm:text-center'>Indulge</p>
                <p className='sm:text-center'>your senses</p>
            </div>
            <p className='sm:text-2xl text-'>Craving something amazing? You've found it.</p>
            <div className="btn flex my-3 justify-center items-center">
                <Link to='/menu'><button className='border-[1px] sm:text-2xl text-xl border-primaryColor sm:my-7 sm:p-4 m-4 p-2 hover:bg-primaryColor hover:text-white transition-all rounded-md'>Check menu</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Hero