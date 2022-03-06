import React, { useEffect, useState } from 'react'

import Multiselect from 'multiselect-react-dropdown';

import { useActions } from '../../hooks/useActions';

import { ProjectTaskManageModalProps, UserData } from '../../models';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Params, useParams } from 'react-router-dom';
import { BsBookmarkCheckFill } from 'react-icons/bs';

const ProjectTaskManageModal = ({ setIsProjectTaskManageModal, projectTaskIndex }: ProjectTaskManageModalProps) => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const { projectId }: Readonly<Params<string>> = useParams()
    const { ProjectTaskIsComplete, ProjectTaskDelete } = useActions()
    let { data: projectDetails }: any = useTypedSelector(
        (state) => state.GetProjectDetails
    )

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [selectedUsers, setSelectedUsers] = useState([])
    const [selectedRadioBtn, setSelectedRadioBtn] = useState('')
    const [assignor, setAssignor] = useState('')
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        if (projectDetails?.project?.task[projectTaskIndex]) {
            setTitle(projectDetails?.project?.task[projectTaskIndex]?.title)
            setDescription(projectDetails?.project?.task[projectTaskIndex]?.description)
            setType(projectDetails?.project?.task[projectTaskIndex]?.type)
            setAssignor(projectDetails?.project?.task[projectTaskIndex]?.assignor)
            setIsComplete(projectDetails?.project?.task[projectTaskIndex]?.isComplete)

            let updatedAlreadySelectedUsers: any = []
            for (let i = 0; i < (alreadySelectedUsers.length); i++) {
                for (let j = 0; j < (projectDetails?.project?.team?.length); j++) {
                    if (alreadySelectedUsers[i]?.id === projectDetails?.project?.team?.[j]?.user?.id) {
                        updatedAlreadySelectedUsers.push({
                            username: projectDetails?.project?.team?.[j]?.user?.username,
                            id: projectDetails?.project?.team?.[j]?.user?.id
                        })
                    }
                }
            }
            setSelectedUsers(updatedAlreadySelectedUsers)
        }
    }, [projectDetails, projectTaskIndex])

    let alreadySelectedUsers: any = []
    alreadySelectedUsers = projectDetails?.project?.task[projectTaskIndex]?.users?.map((user: any) => {
        return { id: user }
    })

    const isRadioSelected = (value: string): boolean => selectedRadioBtn === value;

    const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(e.currentTarget.value);
        setSelectedRadioBtn(e.currentTarget.value)
        if (e.currentTarget.value === 'incomplete') {
            setIsComplete(false)
        } else if (e.currentTarget.value === 'complete') {
            setIsComplete(true)
        }
    }

    const handleIsComplete = () => {
        ProjectTaskIsComplete({
            token: CurrentUser?.token,
            projectId,
            title,
            isComplete: {
                isComplete: isComplete
            }
        })
    }

    const handleDeleteTask = () => {
        ProjectTaskDelete({
            token: CurrentUser?.token,
            projectId,
            title
        })
        setIsProjectTaskManageModal(false)
    }

    return (
        <div className="projecttaskmodal">
            <div className="projecttaskmodal_left">
                <div className='projecttaskmodal_left_inputs'>
                    <label className='projecttaskmodal_left_inputs_label'>Task Title</label>
                    <input className='projecttaskmodal_left_inputs_input' type="text"
                        value={title} onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='projecttaskmodal_left_inputs'>
                    <label className='projecttaskmodal_left_inputs_label'>Description</label>
                    <textarea className='projecttaskmodal_left_inputs_textarea' placeholder='Add Bio'
                        value={description} onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className='projecttaskmodal_left_inputs'>
                    <label className='projecttaskmodal_left_inputs_label'>Type</label>
                    <select placeholder='Type'
                        onChange={(e) => setType(e.target.value)}
                        value={type}
                    >Type
                        <option value="">select</option>
                        <option value="development">development</option>
                        <option value="design">design</option>
                        <option value="testing">testing</option>
                        <option value="deployment">deployment</option>
                        <option value="feature">feature</option>
                        <option value="hotfix">hotfix</option>
                        <option value="issue">issue</option>
                        <option value="bug">bug</option>
                    </select>
                </div>
                <div className='projecttaskmodal_left_inputs'>
                    <label className='projecttaskmodal_left_inputs_label'>Teammates</label>
                    <Multiselect
                        onSelect={(event) => setSelectedUsers(event)}
                        onRemove={(event) => setSelectedUsers(event)}
                        displayValue='username'
                        selectedValues={selectedUsers}
                        placeholder="Select teammates"
                        disablePreSelectedValues
                    />
                </div>
                {/* save changes button */}
            </div>
            <div className="projecttaskmodal_manage">
                <div className='projecttaskmodal_left_inputs'>
                    <label className='projecttaskmodal_left_inputs_label'>Assigned By</label>
                    <input className='projecttaskmodal_left_inputs_input' type="text"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="radio_container_projecttask">
                    {isComplete ?
                        <div className="radio_container_projecttask_icon">
                            <BsBookmarkCheckFill size={24} fill='green' />Completed</div>
                        :
                        <form className='radio_container_form'>
                            <label className='radio_container_label'>
                                <input className='radio_container_input' type="radio" value='complete' name="radio" checked={isRadioSelected('complete')}
                                    onChange={handleRadioClick}
                                />
                                <span className='radio_container_span'>Completed</span>
                            </label>
                        </form>}
                </div>
                <div className='projecttaskmodal_left_actions'>
                    <button className="button-edit" onClick={handleDeleteTask}>Delete Task</button>
                    {!isComplete && <div className='projecttaskmodal_left_actions_manage'>
                        <button className="button-skip" onClick={() => setIsProjectTaskManageModal(false)}>Cancel</button>
                        <button type='button' className="button-submit"
                            onClick={handleIsComplete}
                        >Submit</button>
                    </div>}
                </div>
            </div>
        </div >
    )
}

export default ProjectTaskManageModal