import React from 'react'
import "./Vertical.css"
import SideIcon from './sideIcon.jsx'
import side from "../assets/icon.png"


function Vertical() {
  return (
    <div>
      <div className='topp'>
       <SideIcon 
       ico = {side} link ="/"
       />
       <SideIcon 
       ico = {side} link ="/blog"
       />
       <SideIcon 
       ico = {side} link ="/"
       />
       <SideIcon 
       ico = {side} link ="/blog"
       />
    

      </div>
    </div>
  )
}

export default Vertical