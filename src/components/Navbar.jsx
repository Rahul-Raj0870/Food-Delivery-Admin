import React from 'react'
import './Navbar.css'
import profile from '../assets/user.png'
import logo from '../assets/logo-admin.png'
const Navbar = () => {
  return (
    <div className='Navbar'>
            <img className='logo' src={logo} alt="" />
            {/* <h1 className='logo'>Tomato</h1> */}
            <img className='profile' src={profile} alt="" />
    </div>
  )
}

export default Navbar