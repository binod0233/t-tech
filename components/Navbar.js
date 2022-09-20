import React from 'react'
import Button from './Button'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={`${styles.navbar_height} main_bg_primary navbar fixed-top navbar-expand-lg  sm-h-fit-content`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">

      <img src='/assets/images/logo_alt.png' alt='logo'/>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 w-80 d-flex justify-content-between" style={{width:'85%'}}>
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li> 
          <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
          </li>
           <li className="nav-item">
            <a className="nav-link" href="#">Career</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact Us</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Log In</a>
          </li>
          <li className="nav-item">
          <Button name='Get Started Free'  className='btn-light'/>
          </li>
          <li>
<a className="nav-link" href="#">
<DarkModeIcon/>

</a>

          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  )
}

export default Navbar