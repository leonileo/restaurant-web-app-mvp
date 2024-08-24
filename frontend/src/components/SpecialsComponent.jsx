import React from 'react'
import { Link } from 'react-router-dom'

// dummpy data
import smImg1 from '../assets/images/smImg1.jpg'
import smImg2 from '../assets/images/smImg2.jpg'
import smImg3 from '../assets/images/smImg3.jpg'

import icon1 from '../assets/images/icon1.png'
import icon2 from '../assets/images/icon2.png'


const SpecialsComponent = () => {

  // dummy data
  const specialMeals = [
    {name: "Special juice", picture: smImg1},
    {name: "MIA-Fasting", picture: smImg2},
    {name: "Omelete", picture: smImg3},
  ]

  return (
    <div className='py-10 relative font-Jomolhari overflow-hidden'>
      <div className="top my-4 justify-center sm:text-center text-start sm:p-0 px-2">
        <h3 className='text-lg text-primaryColor'>Our specials</h3>
        <div className='w-full flex sm:justify-center justify-start'>
          <hr className='border-primaryColor border-[1px] rounded-full w-8' />
        </div>
      </div>
      <h2 className='sm:text-4xl text-xl text-center'>Chef's Picks</h2>
      <div className="icons absolute top-0 left-0 w-full h-full text-white">
          <div className='top-[50px] -right-16 absolute sm:w-[150px] w-[100px] flex justify-end z-0'>
              <img src={icon1} alt="burger icon" className=' h-auto -rotate-[45deg]' />
          </div>
          <div className='bottom-5 -left-8 absolute sm:w-[150px] w-[100px] flex justify-end z-0'>
              <img src={icon2} alt="burger icon" className=' h-auto rotate-[20deg]' />
          </div>
      </div>
      {/* special meals */}
      <div className="my-5 meals flex flex-wrap gap-10 justify-center font-Jomolhari uppercase">
        {specialMeals.map((meal, x) => (
          <div key={x} className='sm:h-[30vh] h-[15vh] z-20 my-2 p-2'>
            <div
            style={
              {
                backgroundImage: `linear-gradient(rgba(51, 33, 0, 0.5), rgba(51, 33, 0, 0.5)), url(${meal.picture})`,
                backgroundRepeat: "no-repeat", 
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className='w-[250px] sm:h-[30vh] h-full relative rounded overflow-hidden z-10'
            >
              <div className="txt group bg-gradient-to-tr absolute w-full bottom-0 from-[rgba(51,33,0,0.8)] to-[rgba(115,115,115,0.2)] py-2">
                <p className='sm:text-2xl sm:group-hover:text-xl sm:group-hover:text-center transition-all group-hover:cursor-pointer duration-75 text-white p-2'>{meal.name}</p>
              </div>
            </div>
            <div className="btn text-primaryColor flex justify-center items-center">
                <Link to='/menu'><button className='border-[1px] border-primaryColor py-1 px-2 m-2 hover:bg-primaryColor hover:text-white transition-all rounded-md'>Check menu</button></Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SpecialsComponent