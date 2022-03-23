import React, { useState } from 'react'

import { NavLink, Outlet } from 'react-router-dom'

import './_ProjectLayout.scss'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import Moment from 'react-moment'
import { GetProjectDetailState } from '../../models'


const ProjectLayout = () => {
    const { data: projectDetails }: GetProjectDetailState = useTypedSelector(
        (state) => state.GetProjectDetails
    )
    const [descriptionActive, setDescriptionActive] = useState(true)
    const [teamActive, setTeamActive] = useState(false)
    const [todoActive, setTodoActive] = useState(false)
    const [taskActive, setTaskActive] = useState(false)

    const SelectActiveSection = (section: string) => {
        if (section === 'description') {
            setDescriptionActive(true)
            setTeamActive(false)
            setTodoActive(false)
            setTaskActive(false)
        } else if (section === 'team') {
            setDescriptionActive(false)
            setTeamActive(true)
            setTodoActive(false)
            setTaskActive(false)
        } else if (section === 'todo') {
            setDescriptionActive(false)
            setTeamActive(false)
            setTodoActive(true)
            setTaskActive(false)
        } else if (section === 'tasks') {
            setDescriptionActive(false)
            setTeamActive(false)
            setTodoActive(false)
            setTaskActive(true)
        }
    }
    return (
        <div className='projectlayout'>
            <div className="projectlayout_header">
                <h3>{projectDetails?.project?.name}</h3>
                <div className="projectlayout_header_time">
                    <p>Started</p>
                    <p><Moment fromNow>{projectDetails?.project?.createdAt}</Moment></p>
                </div>
            </div>
            <div className='projectlayout_wrapper'>
                <div className="projectlayout_titles">
                    <NavLink to={`/project/description/${projectDetails?.project?.id}`}
                        className={descriptionActive ? 'projectlayout_title-1 active' : 'projectlayout_title-1'}
                        onClick={() => SelectActiveSection('description')}
                    >
                        <span>
                            <h2>Description</h2>
                        </span>
                    </NavLink>
                    <NavLink to={`/project/team/${projectDetails?.project?.id}`}
                        className={teamActive ? 'projectlayout_title-2 active' : 'projectlayout_title-2'}
                        onClick={() => SelectActiveSection('team')}
                    >
                        <span>
                            <h2>Team</h2>
                        </span>
                    </NavLink>
                    <NavLink to={`/project/todo/${projectDetails?.project?.id}`}
                        className={todoActive ? 'projectlayout_title-3 active' : 'projectlayout_title-3'}
                        onClick={() => SelectActiveSection('todo')}
                    >
                        <span>
                            <h2>Todo</h2>
                        </span>
                    </NavLink>
                    <NavLink to={`/project/tasks/${projectDetails?.project?.id}`} className={taskActive ? 'projectlayout_title-4 active' : 'projectlayout_title-4'}
                        onClick={() => SelectActiveSection('tasks')}
                    >
                        <span>
                            <h2 >Tasks</h2>
                        </span>
                    </NavLink>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default ProjectLayout