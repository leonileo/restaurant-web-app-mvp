import React from 'react'
import loginImg from '../assets/images/loginImg.png'
import { MdOutlineMail } from "react-icons/md";
import { PiPasswordBold } from "react-icons/pi";
import HeaderComponent from '../components/HeaderComponent';
import FooterComponent from '../components/FooterComponent';


const LoginScreen = () => {
  return (
    <>
        <HeaderComponent />
        <div className='flex justify-center items-center w-full min-h-[80vh] h-auto p-5'
        style={{
                backgroundImage: `linear-gradient(rgba(51, 33, 0, 0.8), rgba(51, 33, 0, 0.5)), url(${loginImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            >
            <div className="login-box flex justify-center items-center bg-[rgba(170,168,168,0.7)] backdrop-blur-sm border-primaryColor text-white border-[1px] xl:rounded-full xl:w-[700px] xl:min-h-[700px] p-5 rounded w-full xl:p-0">
                <div className='w-[70%]'>
                    <h2 className='md:text-5xl text-2xl font-bold mb-8'>Welcome</h2>
                    <form className='block w-full space-y-5'>
                        <div className="input space-y-2">
                            <label id='email' className='block text-sm font-semibold text-white md:text-xl'>Email address</label>
                            <label className="group focus:ring-0 text-textColor relative flex justify-between bg-white rounded overflow-hidden border-0">
                                <input type="email" name="email" id="email" placeholder='Email' className='border-0 w-full max-w-[90%] focus:ring-0' />
                                <div className='absolute top-3 right-5 group-focus:hidden'><MdOutlineMail /></div>
                            </label>
                        </div>
                        <div className="input space-y-2">
                            <label id='password' className='block text-sm font-semibold text-white md:text-xl'>Password</label>
                            <label className="group focus:ring-0 text-textColor relative flex justify-between bg-white rounded overflow-hidden border-0">
                                <input type="password" name="password" id="password" placeholder='Password' className='border-0 w-full max-w-[90%] focus:ring-0' />
                                <div className='absolute top-3 right-5 group-focus:hidden'><PiPasswordBold /></div>
                            </label>
                        </div>
                        <div className="btn flex justify-center items-center ">
                            <button className='md:p-4 p-2 bg-white rounded-md text-secondaryColor md:text-2xl font-semibold hover:text-white hover:bg-primaryColor transition-all  w-[50%] '>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <FooterComponent />
    </>
  )
}

export default LoginScreen