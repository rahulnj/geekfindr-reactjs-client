import React from 'react'
import './_Sidebar.scss'
import { BiGroup } from 'react-icons/bi'
const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar_wrapper">
                <ul className="sidebar_list">

                    <li className="sidebar_listItem">
                        <BiGroup size={32} className="sidebar_icon" />
                        <span className="sidebar_listItemText">Groups</span>
                    </li>
                    <li className="sidebar_listItem">
                        <BiGroup size={32} className="sidebar_icon" />
                        <span className="sidebar_listItemText">Groups</span>
                    </li>
                    <li className="sidebar_listItem">
                        <BiGroup size={32} className="sidebar_icon" />
                        <span className="sidebar_listItemText">Groups</span>
                    </li>
                    <li className="sidebar_listItem">
                        <BiGroup size={32} className="sidebar_icon" />
                        <span className="sidebar_listItemText">Groups</span>
                    </li>

                </ul>
                <button className="sidebar_button">Show More</button>
                <hr className="sidebar_hr" />
                {/* <ul className="sidebarFriendList">
                    {Users.map((u) => (
                        <CloseFriend key={u.id} user={u} />
                    ))}
                </ul> */}
            </div>
        </div>
    )
}

export default Sidebar
