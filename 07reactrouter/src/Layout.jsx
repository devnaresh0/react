import React from 'react'
import Header from './components/header'
import footer from './components/footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
    <header />
     <Outlet/>
    <footer />
    </>
  )
}

export default Layout