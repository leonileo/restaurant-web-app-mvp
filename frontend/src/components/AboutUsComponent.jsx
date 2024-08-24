import React from 'react'
import aboutImg from '../assets/images/about.png'
import burgerImg from '../assets/images/burgericon.png'
import chickenImg from '../assets/images/chicken.png'
import { SiHomebridge } from "react-icons/si";
import { Link } from 'react-router-dom'


const AboutUsComponent = () => {
    const styleImg = {
        backgroundImage: `url(${aboutImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }
  return (
    <>
        <div className="sm:flex grid min-h-[50vh] bg-secondaryColor relative overflow-hidden">
            <div style={styleImg} className="left sm:w-[75%] w-full sm:h-auto h-[20vh]">
            </div>
            <div className="right w-full z-10 text-white">
                <div className="box m-20">
                    <div className="top flex gap-5 m-4">
                        <SiHomebridge size={"30px"} />
                        <div className='w-[115px] text-primaryColor font-bold'>
                            <p className='text-xl'>About us</p>
                            <hr className='w-auto border-[1px] rounded-full border-primaryColor' />
                        </div>
                    </div>
                    <div className="bottom font-Jomolhari sm:ml-[65px] ">
                        <h2 className='capitalize text-4xl my-10'>Morninig in addis</h2>
                        <p className='w-[450px] text-justify'>Offers a delightful culinary journey that seamlessly blends the rich traditions of Ethiopian cuisine with the global palate. Our menu is a celebration of flavors, where ancient recipes meet modern inspirations. Begin your day with the authentic taste of Ethiopia, or explore our international selections for a truly unique dining experience. Whether you're a seasoned Ethiopian food lover or a curious newcomer, there's something to satisfy every craving at Morning in Addis.
                        </p>
                        <div className="btn flex my-3 p-0 items-center">
                            <Link to='/menu'><button className='border-[1px] sm:text-2xl text-xl border-primaryColor sm:my-7 p-4  hover:bg-primaryColor hover:text-white transition-all rounded-md'>
                                Check our menu</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="icons relative text-white">
                <div className='top-[50px] -right-16 absolute w-[150px] flex justify-end z-0'>
                    <img src={burgerImg} alt="burger icon" className=' h-auto -rotate-[45deg]' />
                </div>
                <div className='bottom-0 -right-8 absolute w-[150px] flex justify-end z-0'>
                    <img src={chickenImg} alt="burger icon" className=' h-auto rotate-[20deg]' />
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutUsComponent