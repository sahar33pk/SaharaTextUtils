import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  var navigate=useNavigate()
  return (
    <div className='container my-2'>
      <button className='btn btn-info mx-1' onClick={()=>{navigate('form')}} >GotoForm</button>
      <button className='btn btn-info ' onClick={()=>{navigate('contacts')}} >GotoContact</button>
    </div>
  )
}

export default Contact
