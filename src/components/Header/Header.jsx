import React from 'react';
import './Header.css'
import { IoIosNotificationsOutline } from "react-icons/io";
import Image from '../Header/logo.png'
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <div className='header'>
        <div className="header_left">
          <div className="header_img">
              <img src={Image} alt="logo" style={{width:'10em',height:'3em'}}/> 
           </div>
        </div>  
            <div className="header_right">
                <div className="profile_container">
                <h3>username</h3>
                </div>
                <div className="profile_img">
                  <CgProfile style={{width:'2em', height:'2em'}}/>
                </div>
                <div className="notification_container">
                  <IoIosNotificationsOutline style={{width:'2em', height:'2em'}} />
                </div>
            </div>
           
           
       

    </div>   
  );
}

export default Header;
