import React, { useState } from 'react'
import Navnar from './Component/Navnar'
import {Routes,Route} from "react-router-dom"
import Home from './Component/Home'
import Alert from './Component/Alert'
import ContactsLayout from './RootLayout/ContactsLayout'
import ContactForm from './Component/ContactForm'
import ContactContact from './Component/ContactContact'
import Jobs from './Component/Jobs'
import Page404 from './Component/Page404'

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
        <Route path='contact' element={<ContactsLayout />} >
        <Route path='form' element={<ContactForm />}/>
        <Route path='contacts' element={<ContactContact />}/>
        </Route>
        <Route path="job" element={<Jobs />}  />

        <Route path='*' element={<Page404/> }/>
      </Routes>
      </div>
    </div>
  )
}

export default App
