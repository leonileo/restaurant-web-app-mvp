import React, { useState } from 'react'
import profileImg from '../../assets/images/logo.png'
import { MdOutlineMail } from "react-icons/md";
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCredentials } from '../../slices/authSlice';
import { useAccountQuery, useUpdateUserMutation } from '../../slices/accountApiSlice';
import { Spinner } from 'flowbite-react'

const EditAccount = ({setTab, name, setName, email, setEmail}) => {
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {refetch} = useAccountQuery();
  const [updateUser, {isLoading: updateLoader}] = useUpdateUserMutation();

  const updateHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
        toast.error('Password do not match')
    } else{
        try {
            const res = await updateUser({ 
                name: newName && newName,
                email: newEmail && newEmail,
                password: password && password,
            }).unwrap();
            
            dispatch(setCredentials(res));
            refetch()
            toast.success('Profile updated successfully.')
            setTab(5)
        } catch (error) {
            toast.error(error?.data?.message || error.error)                
        }
    }
  }
  
  // dummy data
  // const admin_name = "Morning in addis Admin"
  // const admin_email = "morninginaddis@gmail.com"


    return (
    <div>
        <h2 className='font-semibold md:text-2xl'><span onClick={() => setTab(5)} className='cursor-pointer text-gray-400'>Account /</span> Edit</h2>
        {/* bottom */}
        <div className="bottom border-[1px] flex justify-center rounded p-3 my-5">
        <div className='w-full xl:flex xl:justify-center gap-5'>
          {/* right */}
          <div className="right border-2 p-5 h-fit rounded w-fit">
            <div className="img border-[1px] w-fit rounded mb-5">
              <img src={profileImg} alt="Admin img" className='md:h-52 h-24' />
            </div>
            <div className="text space-y-2">
              <h2 className='text-xl md:font-bold font-semibold'>{name}</h2>
              <div className="email flex gap-2 items-end">
                <MdOutlineMail className='w-6 h-6' />
                <p className='text-gray-400'>{email}</p>
              </div>
            </div>
          </div>
          {/* left */}
          <form onSubmit={updateHandler} className="left xl:w-fit h-fit border-2 xl:p-10 p-4 rounded">
            <div className="top flex justify-between mb-5">
              <span className='text-gray-300 font-bold'>Admin information</span>
            </div>
            <div className="info space-y-5">
              <div className="name space-y-3">
                <label htmlFor='name' className='font-bold block'>Name</label>
                <input value={newName} onChange={(e) => setNewName(e.target.value)} type="text" id='name' placeholder={name} className='font-semibold text-gray-400 rounded xl:w-[550px] w-full border-gray-400'/>
              </div>
              <div className="email space-y-3">
                <label htmlFor='email' className='font-bold block'>Email</label>
                <input value={newEmail} onChange={(e) => setNewEmail(e.target.value)} type="email" id='email' placeholder={email} className='font-semibold text-gray-400 rounded xl:w-[550px] w-full border-gray-400'/>
              </div>
              <div className="password space-y-3">
                <label htmlFor='password' className='font-bold block'>Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id='password' placeholder={"**********"} className='font-semibold text-gray-400 rounded xl:w-[550px] w-full border-gray-400'/>
              </div>
              <div className="confirmPassword space-y-3">
                <label htmlFor='confirm' className='font-bold block'>Confirm password</label>
                <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" id='confirm' placeholder={"**********"} className='font-semibold text-gray-400 rounded xl:w-[550px] w-full border-gray-400'/>
              </div>
              <button className='p-2 px-10 bg-primaryColor rounded text-white border border-transparent hover:border-primaryColor hover:bg-transparent hover:text-primaryColor transition-all md:text-2xl'>
                {updateLoader ? <p>Saving <Spinner/> </p> : "Save"}
              </button>
            </div>
          </form>

        </div>
      </div>

    </div>
  )
}

export default EditAccount