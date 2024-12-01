import React, { useState } from 'react'
import Navnar from './Component/Navnar'
import {Routes,Route} from "react-router-dom"
import Home from './Component/Home'
import Contact from './Component/Contact'
import Alert from './Component/Alert'
const App = () => {
  var [color,setcolor]=useState('light')
  var [text,settext]=useState('EnableDarkMode')
  var [alert,setalert]=useState(null)

    var showalert=(type,message)=>{
      setalert({
        typ:type,
        msg:message
      })
      setTimeout(() => {
        setalert(null)
      }, 1500);
    }

  var showcolor=()=>{
    if(color==="light"){
      setcolor('dark')
      settext('EnableLightMode')
      document.body.style.backgroundColor='#8808e4'
      showalert("success","EnableDarkMode")

    }
    else{
      setcolor('light')
      document.body.style.backgroundColor='white'
      settext('EnableDarkMode')
      showalert("success","EnableLightMode")
    }
  }
  return (
    <div>
      <Navnar color={color} showcolor={showcolor} text={text} />
      <Alert alert={alert} />
      <div className="container">
      <Routes>
        <Route path='/' element={<Home color={color} saharalert={showalert} />} />
        <Route path='/contact' element={<Contact color={color} />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
