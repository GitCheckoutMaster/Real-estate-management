/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { useDispatch } from 'react-redux';
import { logout } from './store/userSlice.js';
import axios from 'axios';
import conf from './conf/conf.js';

function App() {
  const dispatch = useDispatch();

  axios.interceptors.response.use(response => response, error => {
    if (error.response && error.response.status === 405) {
      dispatch(logout());
    }
    return Promise.reject(error);
  })
  
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
