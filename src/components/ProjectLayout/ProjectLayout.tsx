import React, { useState } from 'react'

import './_ProjectLayout.scss'

import { ProjectDescription, ProjectTasks, ProjectTeam, ProjectTodo } from '..'


const ProjectLayout = () => {
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
                <h3>Brocode</h3>
                <p>Started 3 days ago</p>
            </div>
            <div className='projectlayout_wrapper'>
                <div className="projectlayout_titles">
                    <div className={descriptionActive ? 'projectlayout_title-1 active' : 'projectlayout_title-1'}
                        onClick={() => SelectActiveSection('description')}
                    >
                        <span>
                            <h3>Description</h3>
                        </span>
                    </div>
                    <div className={teamActive ? 'projectlayout_title-2 active' : 'projectlayout_title-2'}
                        onClick={() => SelectActiveSection('team')}
                    >
                        <span>
                            <h3>Team</h3>
                        </span>
                    </div>
                    <div className={todoActive ? 'projectlayout_title-3 active' : 'projectlayout_title-3'}
                        onClick={() => SelectActiveSection('todo')}
                    >
                        <span>
                            <h3>Todo</h3>
                        </span>
                    </div>
                    <div className={taskActive ? 'projectlayout_title-4 active' : 'projectlayout_title-4'}
                        onClick={() => SelectActiveSection('tasks')}
                    >
                        <span>
                            <h3>Tasks</h3>
                        </span>
                    </div>
                </div>
                {
                    descriptionActive && (
                        <ProjectDescription />
                    )}
                {
                    teamActive && (
                        <ProjectTeam />
                    )}
                {
                    todoActive && (
                        <ProjectTodo />
                    )}
                {
                    taskActive && (
                        <ProjectTasks />
                    )}
            </div>
        </div>
    )
}

export default ProjectLayout