import React from 'react';
import '../styles/sidebar.css';
import { Link } from 'react-router-dom'
import { sidebarInfo } from '../data/data.jsx';
import { cv } from '../assets';
import { FaDownload } from 'react-icons/fa'


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar__items">
        {
          sidebarInfo.map(({link,icon,}, index) => (
            <Link to={link} className="sidebar__item" key={index}>
              <h5 className="sidebar__itemTitle">
                
              </h5>
         <h5>{icon}</h5>
            </Link>
          ))
        }
        <a href={cv} download className="sidebar__item" rel="noreferrer">
        <FaDownload color='#52bbe5' size={35}/>
        </a>
      </div>
    </div>
  )
}

export default Sidebar