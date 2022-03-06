import React, { useEffect, useState } from 'react'
import { AiFillBug, AiOutlineDeploymentUnit } from 'react-icons/ai'
import { GoIssueOpened } from 'react-icons/go'
import { MdNotificationImportant, MdOutlineFeaturedPlayList } from 'react-icons/md'
import { SiAffinitydesigner, SiSpeedtest } from 'react-icons/si'
import { Params, useParams } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { UserData } from '../../models'
import Modal from '../Modal/Modal'

import './_ProjectTasks.scss'


const ProjectTasks = () => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const { projectId }: Readonly<Params<string>> = useParams()
    const { ProjectTask, GetProjectDetails } = useActions()
    let { data: projectDetails }: any = useTypedSelector(
        (state) => state.GetProjectDetails
    )
    const { success: projectTaskSuccess }: any = useTypedSelector(
        (state) => state.ProjectTask
    )
    const { success: projectTaskIsCompleteSuccess }: any = useTypedSelector(
        (state) => state.ProjectTaskIsComplete
    )
    const { success: projectTaskDeleteSuccess }: any = useTypedSelector(
        (state) => state.ProjectTaskDelete
    )
    useEffect(() => {
        GetProjectDetails({
            token: CurrentUser?.token,
            projectId
        })
    }, [projectTaskSuccess, projectTaskIsCompleteSuccess, projectTaskDeleteSuccess])
    const [isProjectTaskModal, setIsProjectTaskModal] = useState(false)
    const [isProjectTaskManageModal, setIsProjectTaskManageModal] = useState(false)
    const [projectTaskIndex, setProjectTaskIndex] = useState<number>()

    console.log(projectDetails);
    const manageProjectTask = (index: number) => {
        setProjectTaskIndex(index)
        setIsProjectTaskManageModal(true)
    }


    return (
        <>
            <Modal isProjectTaskModal={isProjectTaskModal}
                setIsProjectTaskModal={setIsProjectTaskModal}
                isProjectTaskManageModal={isProjectTaskManageModal}
                setIsProjectTaskManageModal={setIsProjectTaskManageModal}
                projectTaskIndex={projectTaskIndex} />
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
                    projectDetails?.project?.task?.map((task: any, index: number) => (
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
                                {
                                    task?.type === 'development' && <div className='projecttasks_singletask_center_icons'><SiSpeedtest size={24} /> Development</div> ||
                                    task?.type === 'design' && <div className='projecttasks_singletask_center_icons'> <SiAffinitydesigner size={24} />Design</div> ||
                                    task?.type === 'testing' && <div className='projecttasks_singletask_center_icons'> <SiSpeedtest size={24} fill='green' />Testing</div> ||
                                    task?.type === 'deployment' && <div className='projecttasks_singletask_center_icons'><AiOutlineDeploymentUnit size={24} fill='green' />Deployment</div> ||
                                    task?.type === 'feature' && <div className='projecttasks_singletask_center_icons'><MdOutlineFeaturedPlayList size={24} fill='green' />Feature</div> ||
                                    task?.type === 'hotfix' && <div className='projecttasks_singletask_center_icons'> <MdNotificationImportant size={24} fill='green' />Hotfix</div> ||
                                    task?.type === 'issue' && <div className='projecttasks_singletask_center_icons'> <GoIssueOpened size={24} fill='green' />Issue</div> ||
                                    task?.type === 'bug' && <div className='projecttasks_singletask_center_icons'><AiFillBug size={24} fill='red' />Bug</div>
                                }
                            </div>
                            {(task?.assignor === CurrentUser?.id) ?
                                <div className='projecttasks_singletask_right'>
                                    <button className="projecttasks_buttonassign"
                                        onClick={() => manageProjectTask(index)}
                                    >Manage</button>
                                </div>
                                :
                                <div className='projecttasks_singletask_right'>
                                    <button className="projecttasks_buttonassign"
                                        onClick={() => manageProjectTask(index)}
                                    >View</button>
                                </div>
                            }

                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default ProjectTasks