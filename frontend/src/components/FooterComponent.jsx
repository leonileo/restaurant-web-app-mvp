// PROJECT POWERD BY LABA CREATIVES
// FooterComponent.jsx
// Import necessary modules
import React from 'react'
import { Footer } from "flowbite-react";
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom';
import { CiClock1 } from 'react-icons/ci'

const FooterComponent = () => {
    const year = new Date().getFullYear()
  return (
    <>
        <Footer container className='bg-secondaryColor rounded-none' >
            <div className="w-full z-20">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                <div className='space-y-5'>
                    <div className="logo flex gap-3 items-center">
                        <Footer.Brand
                        href=""
                        src={logo}
                        alt="morninginaddis Logo"
                        name="morninginaddis"
                        className='w-[65px] h-[65px]'
                        />
                        <p className='text-[25px] capitalize text-white'>Morning in addis</p>
                    </div>
                    <p className='text-white max-w-[400px]'>
                        Morning in addis offers a delightful culinary journey that seamlessly blends the rich traditions of Ethiopian cuisine with the global palate.
                    </p>
                </div>
                <div className="md:grid flex flex-wrap justify-between sm:grid-cols-3 gap-8 sm:mt-4 mt-6 sm:gap-6">
                    <div>
                    <Footer.Title title="Quick Links" className='text-xl text-white' />
                    <Footer.LinkGroup col className='text-white'>
                        <Footer.Link href="/">Home</Footer.Link>
                        <Footer.Link href="/menu">Special</Footer.Link>
                        <Footer.Link href="/#event">Events</Footer.Link>
                        <Footer.Link href="/#contact">Contact</Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title="Our specials" className='text-xl text-white' />
                    <Footer.LinkGroup col className='text-white'>
                        <div className='flex'>
                            <div>
                                <Footer.Link href="/menu">Sandwich</Footer.Link>
                                <Footer.Link href="/menu">Pizza</Footer.Link>
                                <Footer.Link href="/menu">Burger</Footer.Link>
                                <Footer.Link href="/menu">Juice</Footer.Link>
                                <Footer.Link href="/menu">coffee</Footer.Link>
                            </div>
                            <div className=' sm:block hidden'>
                                <Footer.Link href="/menu">Cold drinks</Footer.Link>
                                <Footer.Link href="/menu">Milkshakes</Footer.Link>
                                <Footer.Link href="/menu">Breakfast</Footer.Link>
                                <Footer.Link href="/menu">Traditional food</Footer.Link>
                                <Footer.Link href="/menu">Chicken, Fish, Spaghetti</Footer.Link>
                            </div>
                        </div>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    <Footer.Title title="Opening hours" className='text-xl text-white' />
                    <div className='card text-white flex items-center'>
                        <div className="left pr-2"> <CiClock1 size={"40px"} /> </div>
                        <div className="right text-sm">
                            <p className='font-bold'>Moday to Friday</p>
                            <p>8AM-2:00PM</p>
                        </div>
                    </div>
                    <div className='card mt-4 text-white flex items-center'>
                        <div className="left pr-2"> <CiClock1 size={"40px"} /> </div>
                        <div className="right text-sm">
                            <p className='font-bold'>Saturday & Sunday</p>
                            <p>7AM-10:00PM</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <p className='flex gap-1 text-white text-sm'>
                        <Footer.Copyright href="#" by="All rights reserved" className='text-white' year={year} />
                        <Link to={'https://morninginaddis.com'} target='_blank' className='underline'>morninginaddis.com</Link>
                    </p>
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <p className='text-white text-md'>Powerd by <Link className='hover:underline' to={'https://labacreatives.github.io'}>Laba creatives </Link> </p>
                    </div>
                </div>
            </div>
        </Footer>
    </>
  )
}

export default FooterComponent