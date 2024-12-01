import React from 'react'

const Contact = (props) => {
  return (
    <div className='contact container' style={{color:props.color==="light"?"black":"white",background:props.color==="light"?"#f8f9fa":"purple",height:"200px",width:"200px",textAlign:"left",padding:"20px"}}>
      <div className=''><b>Name:</b> Saher</div>
      <div className=""><b>Education:</b>SE</div>
      <div className=""><b>Contact:</b>+923156560</div>
    </div>
  )
}

export default Contact
