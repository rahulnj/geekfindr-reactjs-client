import React, { useState } from 'react'

import './ProjectTaskModal.scss'
import Multiselect from 'multiselect-react-dropdown';

import {
    GetProjectDetailState,
    Options,
    ProjectTaskModalProps,
    UserData
} from '../../models'

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';
import validator from '@brocode/simple-react-form-validation-helper';
import Swal from 'sweetalert2';




const ProjectTaskModal = ({ setIsProjectTaskModal }: ProjectTaskModalProps) => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const { ProjectTask } = useActions()

    const [title, setTitle] = useState('')
    const [titleError, setTitleError] = useState('')
    const [description, setDescription] = useState('')
    const [descriptionError, setDescriptionError] = useState('')
    const [type, setType] = useState('')
    const [selectedUsers, setSelectedUsers] = useState([])

    let { data: projectDetails }: GetProjectDetailState = useTypedSelector(
        (state) => state.GetProjectDetails
    )

    //To check weather the multiselect contains only users below the admin hirerachy
    let options = []
    if (projectDetails?.role === 'admin') {
        options = projectDetails?.project?.team?.filter((user) => (
            user?.role !== 'admin'
        ))
    } else {
        options = projectDetails?.project?.team
    }
    //To check weather the multiselect option contains current username or owner name
    options = options?.filter((user) => (
        user?.user?.id !== CurrentUser?.id && user?.user?.id !== projectDetails?.project?.owner?.id
    )).map((user) => {
        return { username: user?.user?.username, id: user?.user?.id }
    })
    let updatedSelectedUsers: string[] = [];
    updatedSelectedUsers = selectedUsers?.map((user: Options) => (
        user?.id
    ))

    //To check if there is same project task name assigned 

    let projectTaskNames: string[] = []
    projectDetails?.project?.task?.forEach((task) => {
        projectTaskNames.push(task?.title)
    })

    const OnChangeDescriptionValidator = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setDescription(e.target.value);
        validator.addressInputBlurHandler(e.target.value, setDescriptionError)
    }
    const OnBlurDescriptionValidator = (e: React.FocusEvent<HTMLTextAreaElement>): void => {
        validator.addressInputBlurHandler(e.target.value, setDescriptionError)
    }

    const OnChangeTaskTitleValidator = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(e.target.value);
        validator.nameInputChangeHandler(e.target.value, setTitleError)
        if (projectTaskNames.includes(e.target.value)) {
            setTitleError('Task name already exists')
        }
    }
    const OnBlurTaskTitleValidator = (e: React.FocusEvent<HTMLInputElement>): void => {
        validator.nameInputBlurHandler(e.target.value, setTitleError)
    }

    const CreateProjectTask = () => {
        if (!titleError && !descriptionError && title !== '' && description !== '') {
            const task = {
                title,
                description,
                users: updatedSelectedUsers,
                type
            }

            ProjectTask({
                token: CurrentUser?.token,
                projectId: projectDetails?.project?.id,
                task
            })
            setIsProjectTaskModal(false)
        } else {
            Swal.fire("please add a task")
        }
    }
    return (
        <div className="projecttaskmodal">
            <div className="projecttaskmodal_left">
                <div className='projecttaskmodal_left_inputs'>
                    <label className='projecttaskmodal_left_inputs_label'>Task Title</label>
                    <input className='projecttaskmodal_left_inputs_input' type="text"
                        onChange={OnChangeTaskTitleValidator} onBlur={OnBlurTaskTitleValidator}
                    />
                    <p className='projecttaskmodal_errorlabel'>{titleError}</p>
                </div>
                <div className='projecttaskmodal_left_inputs'>
                    <label className='projecttaskmodal_left_inputs_label'>Description</label>
                    <textarea className='projecttaskmodal_left_inputs_textarea' placeholder='Add Bio'
                        onChange={OnChangeDescriptionValidator} onBlur={OnBlurDescriptionValidator}
                    />
                    <p className='projecttaskmodal_errorlabel'>{descriptionError}</p>
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
                    />
                </div>
                <div className='projecttaskmodal_left_actions'>
                    <button className="button-skip" onClick={() => setIsProjectTaskModal(false)}>Cancel</button>
                    <button type='button' onClick={CreateProjectTask} className="button-submit">Create</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectTaskModal