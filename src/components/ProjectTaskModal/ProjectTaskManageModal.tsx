import React, { useEffect, useState } from 'react'

import Multiselect from 'multiselect-react-dropdown';

import { useActions } from '../../hooks/useActions';

import { ProjectTaskManageModalProps, UserData } from '../../models';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const ProjectTaskManageModal = ({ setIsProjectTaskManageModal, projectTaskIndex }: ProjectTaskManageModalProps) => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const { ProjectTask } = useActions()
    let { data: projectDetails }: any = useTypedSelector(
        (state) => state.GetProjectDetails
    )

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [selectedUsers, setSelectedUsers] = useState([])
    useEffect(() => {
        if (projectDetails?.project?.task[projectTaskIndex]) {
            setTitle(projectDetails?.project?.task[projectTaskIndex]?.title)
            setDescription(projectDetails?.project?.task[projectTaskIndex]?.description)
            setType(projectDetails?.project?.task[projectTaskIndex]?.type)

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


    const options = projectDetails?.project?.team?.map((user: any) => {
        return { username: user?.user?.username, id: user?.user?.id }
    })

    let alreadySelectedUsers: any = []
    alreadySelectedUsers = projectDetails?.project?.task[projectTaskIndex]?.users?.map((user: any) => {
        return { id: user }
    })

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
                        options={options}
                        displayValue='username'
                        selectedValues={selectedUsers}
                        placeholder="Select teammates"
                    />
                </div>
                <div className='projecttaskmodal_left_actions'>
                    <button className="button-skip" onClick={() => setIsProjectTaskManageModal(false)}>Cancel</button>
                    <button type='button' className="button-submit">Create</button>
                </div>
            </div>
            <div className="projecttaskmodal_manage">

            </div>
        </div>
    )
}

export default ProjectTaskManageModal