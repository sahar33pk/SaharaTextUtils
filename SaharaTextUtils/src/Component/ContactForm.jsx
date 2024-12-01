import React from 'react'

const ContactForm = () => {
  return (
    <div className='container my-3 form-group'>
      <form action="">
        <input className='form-control' type="text" placeholder='write some text'/>
        <input className='form-control my-2' type="email" placeholder='@example.com' />
        <button className="btn btn-info my-2">Submit</button>
      </form>
    </div>
  )
}

export default ContactForm
