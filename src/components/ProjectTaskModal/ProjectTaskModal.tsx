import React, { useState } from 'react'

import './ProjectTaskModal.scss'
import Multiselect from 'multiselect-react-dropdown';
import { ProjectTaskModalProps } from '../../models'
import { useTypedSelector } from '../../hooks/useTypedSelector';




const ProjectTaskModal = ({ setIsProjectTaskModal }: ProjectTaskModalProps) => {

    const [selectedUsers, setSelectedUsers] = useState([])

    let { data: projectDetails }: any = useTypedSelector(
        (state) => state.GetProjectDetails
    )

    console.log(projectDetails);

    const options = projectDetails?.project?.team?.map((user: any) => {
        return { username: user?.user?.username, id: user?.user?.id }
    })
    console.log(selectedUsers);






    return (
        <div className="projecttaskmodal">
            <div className="projecttaskmodal_left">
                <div className='projecttaskmodal_left_inputs'>
                    <label className='projecttaskmodal_left_inputs_label'>Task Title</label>
                    <input className='projecttaskmodal_left_inputs_input' type="text"
                    />
                </div>
                <div className='projecttaskmodal_left_inputs'>
                    <label className='projecttaskmodal_left_inputs_label'>Description</label>
                    <textarea className='projecttaskmodal_left_inputs_textarea' placeholder='Add Bio' />
                </div>
                <div className='projecttaskmodal_left_inputs'>
                    <label className='projecttaskmodal_left_inputs_label'>Type</label>
                    <select placeholder='experience'
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
                    <button className="button-skip" onClick={() => setIsProjectTaskModal(false)}>Cancel</button>
                    <button type='submit' className="button-submit">Create</button>
                </div>
            </div>
            <div className="projecttaskmodal_manage">

            </div>
        </div>
    )
}

export default ProjectTaskModal