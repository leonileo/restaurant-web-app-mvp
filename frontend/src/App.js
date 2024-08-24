// App.js
import { ToastContainer } from 'react-toastify'
import { Outlet } from 'react-router-dom';
import HeaderComponent from './components/HeaderComponent'
import FooterComponent from './components/FooterComponent'
import './App.css';

const App = () => {
  return (
    <>
      <HeaderComponent />
          <main className='flex justify-center sm:min-h-[70vh]'>
              <div className='w-full'>
                  <Outlet />
              </div>
          </main>
        <FooterComponent/>
      <ToastContainer />
    </>
  );
}

export default App;
