import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <header className='header'>
       <Link to='/' style={{textDecoration:'none'}}>
       <h1>ONLINE STORE</h1>
       
       </Link>

       <Link to='/logout'>
       <button className='logout-button'>LOGOUT</button>
       </Link>
      
    </header>
  )
}

export default Header