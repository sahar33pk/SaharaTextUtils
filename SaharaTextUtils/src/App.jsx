import React, { useState } from 'react'
import Navnar from './Component/Navnar'
import {Routes,Route} from "react-router-dom"
import Home from './Component/Home'
import Contact from './Component/Contact'
const App = () => {
  var [color,setcolor]=useState('light')
  var [text,settext]=useState('EnableDarkMode')
  var showcolor=()=>{
    if(color==="light"){
      setcolor('dark')
      settext('EnableLightMode')
      document.body.style.backgroundColor='#8808e4'
    }
    else{
      setcolor('light')
      document.body.style.backgroundColor='white'
      settext('EnableDarkMode')

    }
  }
  return (
    <div>
      <Navnar color={color} showcolor={showcolor} text={text} />
      <div className="container">
      <Routes>
        <Route path='/' element={<Home color={color} />} />
        <Route path='/contact' element={<Contact color={color} />} />
      </Routes>
      </div>
    </div>
  )
}

export default App
