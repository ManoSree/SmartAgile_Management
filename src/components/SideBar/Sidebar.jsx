import React from 'react'
import './Sidebar.css' 
import { MdDashboard } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { BsListTask } from "react-icons/bs";
import { BsChatDotsFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul>
            <li> <MdDashboard /><b>Dashboard</b></li>
            <li> <GoProjectRoadmap /><b>Project</b></li>
            <li><BsListTask /><b>Task Hub</b></li>
            <li><BsChatDotsFill /><b>Chat</b></li>
            <li><IoSettings /><b>Settings</b></li>
        </ul>
      
    </div>
  )
}

export default Sidebar
