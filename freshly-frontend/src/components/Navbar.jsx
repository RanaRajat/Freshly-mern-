import React from 'react'
import {  NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return <div className='NavbarMain'>
  <NavLink to=''><div className='NavbarImgDiv'><img src="https://assets-global.website-files.com/5d03b4e130118314af624b20/5fc4feea074f5b86a6c62285_freshly-logo-R.svg" alt="" /></div></NavLink>
  <div className='NavLinkDiv'>
   <NavLink to='menu'><h3>Plans & Menu</h3></NavLink>
   <NavLink to='menu'><h3>how it works</h3></NavLink>
   <NavLink to='menu'><h3>gifts</h3></NavLink>
   <NavLink to='menu'><h3>refer a friend</h3></NavLink>
   <NavLink to='menu'><h3>help</h3></NavLink>
   </div>
   <div className='NavLoginSignupDiv'>
   <div className='NavLoginButton'><NavLink to='menu'><h3>Login</h3></NavLink></div>
   <div className='NavSignupButton'><NavLink  to='menu'><h3>SignUp</h3></NavLink></div>

   </div>
  </div>
}

export default Navbar