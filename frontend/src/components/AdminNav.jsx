import React from 'react'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import adminImg from '../assets/images/logo.png'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../slices/authSlice';
import { useLogoutMutation } from '../slices/authApiSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import profileImg from '../assets/images/logo.png'


const AdminNav = () => {
    const { userInfo } = useSelector((state) => state.auth)

    const admin_name = userInfo.name;
    const admin_email = userInfo.email

    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const [signout] = useLogoutMutation();
    const logoutHandler = async () => {
        if (window.confirm('Are you sure you want to logout ?')) {
          try {
              await signout().unwrap();
              dispatch(logout());
              toast.success("Logout successfull!")
              setTimeout(() => {
                navigate('/login')          
              }, 1500);        
          } catch (error) {
              toast.error(error?.data?.message || error.error);
          }
        }
      }

    return (
        <div>
            <Navbar fluid rounded className=''>
            <Navbar.Brand href="/">
                <img src={adminImg} className="mr-3 h-16" alt="Admin icon" />
            </Navbar.Brand>
            <div className="flex md:order-2">
                <Dropdown
                arrowIcon={false}
                inline
                label={
                    <Avatar alt="User settings" img={profileImg} rounded className='border-2 hover:border-orange-400 transition-all rounded-full'/>
                }
                >
                <Dropdown.Header>
                    <span className="block text-sm">{admin_name}</span>
                    <span className="block truncate text-sm font-medium">{admin_email}</span>
                </Dropdown.Header>
                <Dropdown.Item>Home</Dropdown.Item>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={logoutHandler}>Sign out</Dropdown.Item>
            </Dropdown>
            </div>
            </Navbar>
            <hr />
        </div>
    )
}

export default AdminNav