import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faContactBook, faDashboard, faHeart, faHome} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
  const [theme,set_theme]=useState(true);
  const handle_theme =() =>{
    if(theme){
      document.body.style.background="White";
      set_theme(false);
    }
    else{
      document.body.style.background="Black";
      set_theme(true);
    }
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container-fluid">
    <NavLink  className="navbar-brand" href="#"><img src="/Images/logo.webp" alt="" style={{height:"50px", width:"50px"}}/></NavLink >
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      <form class="d-flex mx-auto" role="search" >
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit" >Search</button>
      </form>

      <ul className="navbar-nav ms-auto gap-2">
        <li className="nav-item">
        
          <NavLink className="nav-link " aria-current="page" to={"/"}><FontAwesomeIcon icon={faHome} /> Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to={"/price"}><FontAwesomeIcon icon={faHeart}/> Pricing</NavLink>
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to={"/dash"}><FontAwesomeIcon icon={faDashboard}/> Dashboard</NavLink >
        </li>
        <li className="nav-item">
          <NavLink  className="nav-link" to={"/contact"}><FontAwesomeIcon icon={faContactBook}/> Contact Us</NavLink >
        </li>
       
        <button onClick={handle_theme} value={theme}>Dark Theme</button>

      </ul>
    </div>
     </div>
  
</nav>
</>
  )
}

export default Navbar