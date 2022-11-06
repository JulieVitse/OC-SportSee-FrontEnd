import React from 'react'
import Header from './Header/Header'
import SideNav from './SideNav/SideNav'
import { Outlet } from 'react-router-dom'
//import styles from './Layout.module.scss'

/* type LayoutProps = {
    children: React.ReactNode
} */

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
