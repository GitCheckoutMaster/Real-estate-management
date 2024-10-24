/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './componants/Header.jsx'
import Footer from './componants/Footer.jsx'
import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie';
import { logout } from './store/userSlice.js';

function App() {

  const dispatch = useDispatch();
  const accessToken = Cookie.get('accessToken');

  useEffect(() => {
    if (accessToken) {
      dispatch(logout());
    }
  }, [accessToken, dispatch])
  
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
