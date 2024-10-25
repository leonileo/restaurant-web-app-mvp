import React from 'react'
import profileImg from '../../assets/images/logo.png'
import { MdOutlineMail } from "react-icons/md";
import { Spinner } from 'flowbite-react'
import { useAccountQuery } from '../../slices/accountApiSlice';

const Account = ({setTab, setName, setEmail }) => {
  // const admin_name = "Morning in addis Admin"
  // const admin_email = "morninginaddis@gmail.com"
  
  const {data: profile, isLoading, error} = useAccountQuery();

  const editHandler = () => {
    setName(profile.name)
    setEmail(profile.email)
    setTab(8);
  }

  return (
    <div>
      <h2 className='font-semibold md:text-2xl'>Account</h2>
      {isLoading ? 
          <div className='flex items-center justify-center gap-3 text-3xl w-full'>
            <p>Loading...</p>
            <Spinner /> 
          </div> :
          error ? 
            <div className='flex items-center justify-center gap-3 text-3xl w-full'>
            <p>Error !</p>
            </div>
          :
          <div className="bottom border-[1px] flex md:justify-center rounded p-3 my-5">
            <div className='xl:flex xl:justify-center gap- 5 p-2 xl:space-x-2 xl:space-y-0 space-y-5 w-full'>
              {/* right */}
              <div className="right border-2 p-5 rounded w-fit">
                <div className="img border-[1px] w-fit rounded mb-5">
                  <img src={profileImg} alt="Admin img" className='md:h-52 h-24' />
                </div>
                <div className="text space-y-2">
                  <h2 className='text-xl md:font-bold font-semibold'>{profile.name}</h2>
                  <div className="email flex gap-2 items-end">
                    <MdOutlineMail className='w-6 h-6' />
                    <p className='text-gray-400'>{profile.email}</p>
                  </div>
                </div>
              </div>
              {/* left */}
              <div className="left xl:w-[50%] w-full h-fit border-2 xl:p-10 p-4 rounded">
                <div className="top flex justify-between">
                  <span className='text-gray-300 font-bold'>Admin information</span>
                  <button onClick={editHandler} className='p-1 font-semibold px-4 bg-primaryColor text-white rounded border-[1px] border-transparent hover:bg-transparent hover:text-primaryColor hover:border-primaryColor transition-all'>Edit profile</button>
                </div>
                <div className="info space-y-5">
                  <div className="name">
                    <p className='font-bold'>Name</p>
                    <p className='font-semibold text-gray-400'>{profile.name}</p>
                  </div>
                  <div className="email">
                    <p className='font-bold'>Email</p>
                    <p className='font-semibold text-gray-400'>{profile.email}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        }
    </div>
  )
}

export default Account