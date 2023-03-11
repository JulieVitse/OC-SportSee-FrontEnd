import React from 'react'
import Header from './Header/Header'
import SideNav from './SideNav/SideNav'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <React.Fragment>
      <Header />
      <SideNav />
      <Outlet />
    </React.Fragment>
  )
}

export default Layout
