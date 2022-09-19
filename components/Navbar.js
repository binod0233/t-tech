import React from 'react'
import Button from './Button'
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" style={{height:'10vh'}}>
    <div class="container-fluid">
      <a class="navbar-brand" href="#">

      <img src='/assets/images/logo.png' alt='logo'/>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto  mb-2 mb-lg-0 w-80 d-flex justify-content-between" style={{width:'85%'}}>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Services</a>
          </li> 
          <li class="nav-item">
            <a class="nav-link" href="#">About Us</a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="#">Career</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pricing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Log In</a>
          </li>
          <li class="nav-item">
          <Button name='Get Started' className='btn-light'/>
          </li>
          <li>
<a class="nav-link" href="#">
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