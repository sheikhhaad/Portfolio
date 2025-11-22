import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Lenis from '@studio-freight/lenis'
import Cursor from './Components/Cursor.jsx'

const Layout = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => t,
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <>
    <Cursor/>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
