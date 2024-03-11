import React from 'react'
import './Sidebar.css' 
import { MdDashboard } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { BsChatDotsFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul>
            <li> <NavLink to='/dashboard' ClassName="active">
            <MdDashboard /><b>Dashboard</b>
            </NavLink></li>
            <li> <NavLink to='/project' ClassName="active">
            <AiFillProject /><b>Project</b>
            </NavLink></li>
            <li> <NavLink to='/Taskhub' ClassName="active">
            <FaTasks /><b>Task Hub</b>
            </NavLink></li>
            <li> <NavLink to='/Chat' ClassName="active">
            <BsChatDotsFill /><b>Chat</b>
            </NavLink></li>
            <li> <NavLink to='/setting' ClassName="active">
            <IoSettings /><b>Settings</b>
            </NavLink></li>
              
            {/* <div className='project'>
            <li > <GoProjectRoadmap /><b>Project</b></li>
            </div>
           
            <li><BsListTask /><b>Task Hub</b></li>
            <li><BsChatDotsFill /><b>Chat</b></li>
            <li><IoSettings /><b>Settings</b></li> */}
        </ul>
      
    </div> 
  )
}

export default Sidebar
