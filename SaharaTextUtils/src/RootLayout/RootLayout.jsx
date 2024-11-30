import React from 'react'
import Navnar from '../Component/Navnar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <div>
      <Navnar />
      <Outlet />
    </div>
  )
}

export default RootLayout
