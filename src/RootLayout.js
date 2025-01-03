import React from 'react'
import Navigator from './Navigator'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

export default function RootLayout() {
  return (
    <div>
    <Navigator/>
    <Outlet/>
    <Footer/>
    </div>
  )
}
