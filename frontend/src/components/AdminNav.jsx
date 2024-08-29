import React from 'react'
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import adminImg from '../assets/images/logo.png'

const AdminNav = () => {
    const admin_name = "Admin"
    const admin_email = "Admin@email.com"
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
                <Avatar alt="User settings" img="" rounded />
            }
            >
            <Dropdown.Header>
                <span className="block text-sm">{admin_name}</span>
                <span className="block truncate text-sm font-medium">{admin_email}</span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        </div>
        </Navbar>
        <hr />
    </div>
  )
}

export default AdminNav