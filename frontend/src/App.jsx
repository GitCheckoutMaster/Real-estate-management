/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './componants/Header.jsx'
import Footer from './componants/Footer.jsx'

function App() {
  
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
