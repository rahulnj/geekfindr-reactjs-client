import React, { useEffect, useState } from 'react'

import Multiselect from 'multiselect-react-dropdown';

import { useActions } from '../../hooks/useActions';

import { ProjectTaskManageModalProps, UserData } from '../../models';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const ProjectTaskManageModal = ({ setIsProjectTaskManageModal }: ProjectTaskManageModalProps) => {
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
        if (projectDetails?.project?.task) {

        }
    }, [projectDetails])


    const options = projectDetails?.project?.team?.map((user: any) => {
        return { username: user?.user?.username, id: user?.user?.id }
    })

    console.log(projectDetails);

    let alreadySelectedUsers: string[] = []
    alreadySelectedUsers = projectDetails?.project?.task[0]?.users?.map((user: any) => {
        return { id: user }

    })
    console.log(alreadySelectedUsers);



    return (
        <div className="projecttaskmodal">
            <div className="projecttaskmodal_left">
                <div className='projecttaskmodal_left_inputs'>
                    <label className='projecttaskmodal_left_inputs_label'>Task Title</label>
                    <input className='projecttaskmodal_left_inputs_input' type="text"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className='projecttaskmodal_left_inputs'>
                    <label className='projecttaskmodal_left_inputs_label'>Description</label>
                    <textarea className='projecttaskmodal_left_inputs_textarea' placeholder='Add Bio'
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className='projecttaskmodal_left_inputs'>
                    <label className='projecttaskmodal_left_inputs_label'>Type</label>
                    <select placeholder='Type'
                        onChange={(e) => setType(e.target.value)}
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
                        style={{}}
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