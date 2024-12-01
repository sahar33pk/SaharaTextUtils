import React from 'react'
import Jobs from '../Component/Jobs'
import { Outlet } from 'react-router-dom'

const Jobslayout = () => {
  return (
    <div>
      <Jobs />
      <Outlet />
    </div>
  )
}

export default Jobslayout
