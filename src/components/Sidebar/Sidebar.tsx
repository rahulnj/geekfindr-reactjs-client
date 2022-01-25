import React from 'react'
import './_Sidebar.scss'
import { FiHome, FiSettings } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr'
import { Handle } from '../../models'





const Sidebar: React.FC<Handle> = ({ sidebar, handleToggleSidebar }) => {
    return (
        <div className={sidebar ? "sidebar open" : "sidebar"}
            onClick={() => handleToggleSidebar(false)}>
            <div className="sidebar_wrapper">
                <div className='sidebar_heading'>
                    <span>Projects</span>
                    <span>see all</span>
                </div>
                <ul className="sidebar_list">
                    <li className="sidebar_listItem">
                        <a href="#" className='sidebar_link'>
                            <FiHome size={24} className="sidebar_icon" />
                            <span className="sidebar_listItemText">Home</span>
                        </a>
                    </li>
                    <li className="sidebar_listItem">
                        <a href="#" className='sidebar_link'>
                            <BsChatLeft size={24} className="sidebar_icon" />
                            <span className="sidebar_listItemText">Chats</span>
                        </a>
                    </li>
                    <li className="sidebar_listItem">
                        <a href="#" className='sidebar_link'>
                            <GrProjects size={24} className="sidebar_icon" />
                            <span className="sidebar_listItemText">Projects</span>
                        </a>
                    </li>
                    <li className="sidebar_listItem">
                        <a href="#" className='sidebar_link'>
                            <FiSettings size={24} className="sidebar_icon" />
                            <span className="sidebar_listItemText">Settings</span>
                        </a>
                    </li>
                </ul>
                {/* <button className="sidebar_button">Show More</button>
                <hr className="sidebar_hr" /> */}
                {/* <ul className="sidebarFriendList">
                    {Users.map((u) => (
                        <CloseFriend key={u.id} user={u} />
                    ))}
                </ul> */}
            </div>
        </div >
    )
}

export default Sidebar
