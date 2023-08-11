import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import {ImSearch} from "react-icons/im"
const Header = () => {
  return (
    <>
    <nav className="header">
        <img src="logo.png" alt="" />
        <div className='links'>
            <Link to="/tvshows"> Tv Shows </Link>
            <Link to="/movies"> Movies </Link>
            <Link to="/recentlyAdded"> Recently Added </Link>
            <Link to="/myList"> My List  </Link>

        </div>
        <div className='search'>
        <ImSearch/>
        </div>
        
    </nav>
    
    </>
  )
}

export default Header