import React, { useState } from 'react'
const Home = (props) => {
var [text,settext]=useState('')
var addtext =(event)=>{
  settext(event.target.value)
}
var uppercase=()=>{
  var uppertext=text.toUpperCase()
  settext(uppertext)
}
var lowercase=()=>{
  var lowertext=text.toLowerCase()
  settext(lowertext)
}
var copytext =()=>{
  var copy=document.getElementById("floatingTextarea")
  copy.select()
  navigator.clipboard.writeText(text)
}
var cleartext=()=>{
  settext('')
}
var removeextraspace =()=>{
  var remotext=text.split(/[" "]+/)
  var remjoin=remotext.join(' ')
  settext(remjoin)
}

  return (
    <div>
      <div className="form-floating container my-2">
  <textarea className="form-control" value={text} onChange={addtext}  id="floatingTextarea" style={{height:'200px',background:props.color==="light"?"white":"black",color:props.color==="light"? "dark" : "white" }} > </textarea>
  <label htmlFor="floatingTextarea"></label>

    <div className="btn-group my-3 text-info">
      <button className=' btn btn-info' onClick={uppercase}>UpperCase</button>
      <button className='mx-1 btn btn-info' onClick={lowercase}>LowerCase</button>
      <button className=' btn btn-info' onClick={copytext}>CopyText</button>
      <button className="mx-1 btn btn-info" onClick={cleartext}>ClearText</button>
      <button className=" btn btn-info" onClick={removeextraspace}>RemoveExtraSpace</button>
    </div>
    </div>
    <div className="input-group">
      <div className="input-group-append">
        <span className='input-group-text'><b>Letters:</b>  </span>
      </div>
      <div className="input-group-append">
        <span className='input-group-text'>{text.length} </span>
      </div>

      <div className="input-group-append">
        <span className='input-group-text'><b>Words:</b></span>
      </div>
      <div className="input-group-append">
        <span className='input-group-text'> { text.split(/[" "]+/).length }</span>
      </div>
        <div className="input-group-append">
          <span className="input-group-text"><b>ReadTimes:</b></span>
        </div>
        <div className="input-group-append">
  <span className="input-group-text">{text.split(/\s+/).map((e)=>{return e.length!==0}).length*0.008}</span>
        </div>

    </div>
      <div className="container">
        <div className="row my-3">
            <h3 style={{color:props.color==="light"? "black " : "white "}}>Some Preview</h3>
          <div className="col-sm-12 my-2" style={{background:props.color==="light"?"silver":"black",border:'1px solid grey',borderRadius:'10px'}}>
            <p className='my-1' style={{color:props.color==="light"?"black":"white"}}>{text.length>0? text :"Nothing To Preview"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
