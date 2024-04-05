import React from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';

import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo1.png'
const Navbar = ({setCollapse}) => {
  return (
    <nav className='flex-div'>
        <div className="nav-left flex-div">
            <img src={menu_icon} alt="" className='menu-icon'
            onClick={()=> setCollapse((prev) => !prev)}
            />
         
            <Link to='/'><img src={logo} alt="" className='logo' />
            </Link>
        </div>
        <div className="nav-middle flex-div">
            <input type="text" placeholder='Search'/>
            <div className="close">&times;</div>
            <img src={search_icon} alt="" />
        </div>
        <div className="nav-right flex-div">
            <img src={upload_icon} alt="" />
            <img src={more_icon} alt="" />
            <img src={notification} alt="" />
            <img src={profile_icon} alt=""  className='user-icon'/>
        </div>
        
    </nav>
  )
}

export default Navbar
