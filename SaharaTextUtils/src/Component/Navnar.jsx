import React from 'react'
import {  NavLink } from 'react-router-dom'
import lion from '../assets/lion.png'
const Navnar = (props) => {
  return (
    <div className='menue'>
      <ul className={`nav  bg-${props.color}`}>
      <img src={lion} alt="" style={{height:'50px'}} />
      <NavLink to='/'> <li className={`nav-item text-${props.color==="light"?"dark":"light"}`}>Home</li></NavLink>
      <NavLink to='contact' >  <li className={`nav-item text-${props.color==="light"?"dark":"light"}`}>Contact</li></NavLink>
      <button className={` btn btn-${props.color==="light"?"dark":"light"} `} onClick={props.showcolor}> {props.text==="EnableDarkMode"? "EnableDarkMode":"EnableLightMode"}</button>
</ul>


    </div>
  )
}

export default Navnar
