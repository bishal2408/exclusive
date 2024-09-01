import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
        <Header />
        <div className='px-10 min-h-screen'>
            <Outlet />
        </div>
        <Footer />
    </>
  )
}

export default Layout
