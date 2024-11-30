import React from 'react'

const Contact = (props) => {
  return (
    <div className='contact container' style={{color:props.color==="light"?"black":"white"}}>
      <div className=''><b>Name:</b> Saher</div>
      <div className=""><b>Education:</b>SE</div>
      <div className=""><b>Contact:</b>+923156568440</div>
    </div>
  )
}

export default Contact
