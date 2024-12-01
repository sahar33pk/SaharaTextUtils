import React, { useState } from 'react'
const Home = (props) => {
var [text,settext]=useState('')
var addtext =(event)=>{
  settext(event.target.value)
}
var uppercase=()=>{
  var uppertext=text.toUpperCase()
  settext(uppertext)
  props.saharalert("success",'EnablUpperCase')
}
var lowercase=()=>{
  var lowertext=text.toLowerCase()
  settext(lowertext)
  props.saharalert("success",'EnablLowerCase')

}
var copytext =()=>{

  navigator.clipboard.writeText(text)
  props.saharalert("success",'EnableCopyText')

}
var cleartext=()=>{
  settext('')
  props.saharalert("success",'EnableClearText')

}
var removeextraspace =()=>{
  var remotext=text.split(/[" "]+/)
  var remjoin=remotext.join(' ')
  settext(remjoin)
  props.saharalert("success",'EnableRemovespace')

}

  return (
    <div>
      <div className="form container my-2">
  <textarea className="form-control" value={text} onChange={addtext}  id="floatingTextarea" style={{height:'200px',background:props.color==="light"?"#f8f9fa":"rgb(98 8 163)",color:props.color==="light"? "black" : "white" }} > </textarea>
  <label htmlFor="floatingTextarea"></label>

    <div className="btn-group my-3 ">
      <button disabled={text.length===0} className={`btn btn-${props.color==="light"?"light":"dark"} `} onClick={uppercase}>UpperCase</button>
      <button disabled={text.length===0} className={`mx-1 btn btn-${props.color==="light"?"light":"dark"} `} onClick={lowercase}>LowerCase</button>
      <button disabled={text.length===0} className={`btn btn-${props.color==="light"?"light":"dark"} `} onClick={copytext}>CopyText</button>
      <button disabled={text.length===0} className={`mx-1 btn btn-${props.color==="light"?"light":"dark"} `} onClick={cleartext}>ClearText</button>
      <button disabled={text.length===0} className={`btn btn-${props.color==="light"?"light":"dark"} `} onClick={removeextraspace}>RemoveExtraSpace</button>
    </div>
    </div>
    <div className="input-group container">
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
        <span className='input-group-text'> { text.split(/\s+/).filter((e)=>{return e.length!==0}).length }</span>
      </div>
        <div className="input-group-append">
          <span className="input-group-text"><b>ReadTimes:</b></span>
        </div>
        <div className="input-group-append">
  <span className="input-group-text">{text.split(/\s+/).filter((e)=>{return e.length!==0}).length*0.008}</span>
        </div>

    </div>
      <div className="container">
        <div className="row my-3 mx-1">
            <h3 style={{color:props.color==="light"? "black " : "white "}}>Some Preview</h3>
          <div className="col-sm-12 my-2 " style={{background:props.color==="light"?"silver":"black",border:'1px solid grey',borderRadius:'10px'}}>
            <p className='my-1' style={{color:props.color==="light"?"black":"white"}}>{text.length>0? text :"Nothing To Preview"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
