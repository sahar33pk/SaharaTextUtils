import React from 'react'
import Contact from '../Component/Contact'
import { Outlet } from 'react-router-dom'

const ContactsLayout = () => {
  return (
    <div>
      <Contact />
      <Outlet />
    </div>
  )
}

export default ContactsLayout
