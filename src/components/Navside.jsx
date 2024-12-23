import React from 'react'
import './Navside.css'
import {NavLink} from 'react-router-dom'
const Navside = () => {
  return (
    <div className='sidebar'>
        <div className='side-option'>
            <NavLink to={'/add'} className='option'>
                <button className='btn'><i className="fa-solid fa-circle-plus"></i></button>
                <p>Add Items</p>
            </NavLink>
            <NavLink to={'/list'} className='option'>
                <button className='btn'><i className="fa-solid fa-calendar-check"></i></button>
                <p>List Items</p>
            </NavLink>
            <NavLink to={'/orders'} className='option'>
                <button className='btn'><i className="fa-solid fa-calendar-check"></i></button>
                <p>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default Navside