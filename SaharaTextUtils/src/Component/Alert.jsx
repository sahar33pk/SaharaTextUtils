import React from 'react'

const Alert = (props) => {
  var setfont=(e)=>{
    var text=e.toLowerCase();
    var settext=text.charAt(0).toUpperCase()+text.slice(1)
    return `${settext}`
  }
  return (
    <div className='container' style={{height:"70px",marginTop:"5px",width:"95%"}}>
      {props.alert && <div className={`alert  alert-${props.alert.typ} `} style={{width:"100%"}}>
       <p><b> {setfont(props.alert.typ)}:</b> {props.alert.msg}</p>
      </div>}
    </div>
  )
}

export default Alert
