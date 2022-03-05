import React, { useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { UserData } from '../../models'
import Modal from '../Modal/Modal'

import './_ProjectTasks.scss'


const ProjectTasks = () => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const { ProjectTask } = useActions()
    let { data: projectDetails }: any = useTypedSelector(
        (state) => state.GetProjectDetails
    )

    const [isProjectTaskModal, setIsProjectTaskModal] = useState(false)
    const [isProjectTaskManageModal, setIsProjectTaskManageModal] = useState(false)

    console.log(projectDetails);

    return (
        <>
            <Modal isProjectTaskModal={isProjectTaskModal}
                setIsProjectTaskModal={setIsProjectTaskModal}
                isProjectTaskManageModal={isProjectTaskManageModal}
                setIsProjectTaskManageModal={setIsProjectTaskManageModal} />


            <div className='projecttasks'>
                <div className="projecttasks_header">
                    <h3>Tasks</h3>
                    <div className='projecttasks_input'>
                        <button className="projecttasks_buttonassign"
                            onClick={() => setIsProjectTaskModal(true)}
                        >+ Assign Tasks</button>
                    </div>
                </div>
                <hr />
                {
                    projectDetails?.project?.task?.map((task: any, index: string) => (
                        <div className='projecttasks_singletask' key={index}>
                            <div className='projecttasks_singletask_left'>
                                <h3>
                                    {task?.title}
                                </h3>
                                <p>
                                    {task?.description}
                                </p>
                            </div>
                            <div className='projecttasks_singletask_center'>
                                <span>
                                    {task?.type}
                                </span>
                            </div>
                            <div className='projecttasks_singletask_right'>
                                <button className="projecttasks_buttonassign"
                                    onClick={() => setIsProjectTaskManageModal(true)}
                                >Manage</button>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    )
}

export default ProjectTasks