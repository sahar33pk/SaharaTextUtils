import React from 'react'
import {  NavLink } from 'react-router-dom'
import lion from '../assets/lion.png'
const Navnar = (props) => {
  return (
    <div className='menue'>
<ul className={`nav `} style={{background:props.color==="light"?"#f8f9fa":"rgb(98,8,163)",color:props.color==="light"?"dark":"light"}}>
      <img src={lion} alt="" style={{height:'50px'}} />
      <NavLink to='/'> <li className={`nav-item text-${props.color==="light"?"dark":"light"}`}>Home</li></NavLink>
      <NavLink to='contact' >  <li className={`nav-item text-${props.color==="light"?"dark":"light"}`}>Contact</li></NavLink>
      <NavLink to='job' >  <li className={`nav-item text-${props.color==="light"?"dark":"light"}`}>Job</li></NavLink>

      <button className={` btn btn-${props.color==="light"?"dark":"light"} `} onClick={props.showcolor}> {props.text==="EnableDarkMode"? "EnableDarkMode":"EnableLightMode"}</button>
</ul>


    </div>
  )
}

export default Navnar
