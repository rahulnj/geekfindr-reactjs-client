import React, { useEffect, useState } from 'react'
import './_Sidebar.scss'
import { FiHome, FiSettings } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr'
import { SidebarProps, UserData } from '../../models'

import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useNavigate } from 'react-router-dom'
import { createImageFromInitials, getRandomColor } from '../../helpers/CreateImageFromInitials'

const Sidebar: React.FC<SidebarProps> = ({ isSidebar, handleToggleSidebar, project }) => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);

    const [windowSizeListener, setWindowSizeListener] = useState(false)
    const navigate = useNavigate()
    const { GetProjectDetails } = useActions()
    useEffect(() => {
        const listener = () => {
            if (window.innerWidth <= 540) {
                setWindowSizeListener(true)
            } else {
                setWindowSizeListener(false)
            }
        }
        window.addEventListener('resize', listener);

        return () => {
            window.removeEventListener('resize', listener)
        }
    }, [])

    const { GetMyProject } = useActions();
    const { data: myProjects }: any = useTypedSelector(
        (state) => state.GetMyProject
    )
    const { loading: createPostLoading }: any = useTypedSelector(
        (state) => state.CreatePost
    )
    useEffect(() => {
        GetMyProject({ token: CurrentUser?.token })
    }, [createPostLoading])

    const getProjectDetails = (projectId: string): void => {
        GetProjectDetails({
            token: CurrentUser?.token,
            projectId
        })
        navigate(`/project/${projectId}`)
    }
    return (
        <div className={isSidebar ? "sidebar open" : "sidebar"}
            style={{ display: project ? (windowSizeListener ? 'block' : 'none') : '' }}
            onClick={() => handleToggleSidebar(false)}>
            <div className="sidebar_wrapper">
                <div className='sidebar_heading'>
                    <h4>Projects</h4>
                    {/* <span>see all</span> */}
                </div>
                {myProjects?.map((project: any) => (
                    <div className='sidebar_projects' key={project?.project?.id} onClick={() => getProjectDetails(project?.project?.id)}>
                        <div className='sidebar_singleproject'>
                            <img src={createImageFromInitials(400, project?.project?.name, getRandomColor())} alt="" />
                            <div className='sidebar_singleprojectdetails'>
                                <h4>{project?.project?.name}</h4>
                                <p>{project?.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
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
