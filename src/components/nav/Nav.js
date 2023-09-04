import React  from 'react'
import logo from"./../../images/logo.png"
import {NavLink} from "react-router-dom"
import "./nav.css"
export default function Navs({shownav,setshownav}) {
  return (
    <>
      <div className={`sticky-top position-relative `}>
      
    <nav className={`navbar  navbar-expand-lg   bg-light ${shownav?"over":""} `}>
    <div className="container">
          <img className="navbar-brand"  src={logo} alt=""/>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
          <NavLink className="nav-link" to="/
          ">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/About">About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Explore">Explore Foods</NavLink>
      </li>
      <li className="nav-item">
      <NavLink className="nav-link" to="/Reviews">Reviews</NavLink>
              </li>
              
              <li className="nav-item">
              <NavLink className="nav-link" to="/FAQ">FAQ</NavLink>
        </li>


<button className="btn buttn nav-btn">1800 7900 400</button>






              
        </ul>
        </div>
        </div>
        </nav>
        </div>
      </>
  )
}
