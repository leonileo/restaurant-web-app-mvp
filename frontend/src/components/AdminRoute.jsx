// PROJECT POWERD BY LABA CREATIVES
// AdminRoute.jsx
// Import necessary modules
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

// AdminRoute FUNCTION
const AdminRoute = () => {
    // const { userInfo } = useSelector(state => state.auth);
    const userInfo = {
        isAdmin: true
    }
    return userInfo && userInfo.isAdmin ? <Outlet />
    : 
    <Navigate to='/login' replace />
}

export default AdminRoute
// PROJECT POWERD BY LABA CREATIVES