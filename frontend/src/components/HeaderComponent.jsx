// PROJECT POWERD BY LABA CREATIVES
// HeaderComponent.jsx
// Import necessary modules
import React from 'react'
import { Navbar } from 'flowbite-react'
import { Link } from 'react-router-dom'
import '../index.css'

const HeaderComponent = () => {
  return (
    <div className='z-10 absolute top-0 w-full font-Jomolhari'>
    <Navbar fluid rounded className={"bg-transparent text-white rounded-none"}>
      <Navbar.Brand href="">
        <img src="/" className="mr-3 h-6 sm:h-9" alt="" />
        <span className="self-center whitespace-nowrap text-xl font-semibold ">Morning in addis</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Link to='/menu' className='bg-primaryColor transition-all rounded-[20px] px-8 py-2 text-sm text-white'>Check menu</Link> 
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/#about" className='sm:text-white nav-link'>About</Navbar.Link>
        <Navbar.Link href="/#specials" className='sm:text-white nav-link'>Specials</Navbar.Link>
        <Navbar.Link href="/#events" className='sm:text-white nav-link'>Events</Navbar.Link>
        <Navbar.Link href="/#contact" className='sm:text-white nav-link'>Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    <hr className='border-white' />
    </div>
  )
}

export default HeaderComponent