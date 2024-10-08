// PROJECT POWERD BY LABA CREATIVES
// index.css
// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store';
import './index.css';

// screens
import HomeScreen from './screens/HomeScreen'
import MenuScreen from './screens/MenuScreen';
import LoginScreen from './screens/LoginScreen';
import AdminRoute from './components/AdminRoute';
import AdminDashboard from './screens/Admin/AdminDashboard.jsx';


// Router function
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/menu' element={<MenuScreen />} />
      <Route path='/login' element={<LoginScreen />} />
      <Route path='' element={<AdminRoute />}>
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
      </Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);


// PROJECT POWERD BY LABA CREATIVES