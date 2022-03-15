import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

// import 'sweetalert2/src/sweetalert2.scss'
import Multiselect from 'multiselect-react-dropdown';

import { useActions } from '../../hooks/useActions';

import { GetProjectDetailState, Owner, ProjectTaskManageModalProps, UserData } from '../../models';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Params, useParams } from 'react-router-dom';
import { BsBookmarkCheckFill } from 'react-icons/bs';

const ProjectTaskManageModal = ({ setIsProjectTaskManageModal, projectTaskIndex }: ProjectTaskManageModalProps) => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const { projectId }: Readonly<Params<string>> = useParams()
    const { ProjectTaskIsComplete, ProjectTaskDelete } = useActions()
    let { data: projectDetails }: GetProjectDetailState = useTypedSelector(
        (state) => state.GetProjectDetails
    )

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [type, setType] = useState('')
    const [selectedUsers, setSelectedUsers] = useState([])
    const [selectedRadioBtn, setSelectedRadioBtn] = useState('')
    const [assignor, setAssignor] = useState({ username: '', avatar: '', id: '' })
    const [isComplete, setIsComplete] = useState(false)
    const [isTaskComplete, setIsTaskComplete] = useState(false)

    useEffect(() => {
        if (projectDetails?.project?.task[projectTaskIndex]) {
            setTitle(projectDetails?.project?.task[projectTaskIndex]?.title)
            setDescription(projectDetails?.project?.task[projectTaskIndex]?.description)
            setType(projectDetails?.project?.task[projectTaskIndex]?.type)
            setAssignor(projectDetails?.project?.task[projectTaskIndex]?.assignor)
            setIsTaskComplete(projectDetails?.project?.task[projectTaskIndex]?.isComplete)
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
    alreadySelectedUsers = projectDetails?.project?.task[projectTaskIndex]?.users?.map((user) => {
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
    console.log(projectDetails);

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
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this task",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#9D0AFF',
            confirmButtonText: 'Delete'
        }).then((result) => {
            if (result.isConfirmed) {
                ProjectTaskDelete({
                    token: CurrentUser?.token,
                    projectId,
                    title
                })
                setIsProjectTaskManageModal(false)
                Swal.fire(
                    'Deleted!',
                    'Task has been deleted.',
                    'success'
                )
            } else {
                setIsProjectTaskManageModal(true)
            }
        })


    }

    return (
        <div className="projecttaskmodal">
            <div className="projecttaskmodal_left">
                <div className='projecttaskmodal_left_inputs'>
                    <label className='projecttaskmodal_left_inputs_label'>Task Title</label>
                    <input className='projecttaskmodal_left_inputs_input' type="text"
                        value={title} onChange={(e) => setTitle(e.target.value)}
                        disabled />
                </div>
                <div className='projecttaskmodal_left_inputs'>
                    <label className='projecttaskmodal_left_inputs_label'>Description</label>
                    <textarea className='projecttaskmodal_left_inputs_textarea' placeholder='Add Bio'
                        value={description} onChange={(e) => setDescription(e.target.value)}
                        disabled />
                </div>
                <div className='projecttaskmodal_left_inputs'>
                    <label className='projecttaskmodal_left_inputs_label'>Type</label>
                    <select placeholder='Type'
                        onChange={(e) => setType(e.target.value)}
                        value={type}
                        disabled >Type
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
                    <div className='projecttaskmodal_left_assignor'>
                        <img src={assignor?.avatar} alt="" />
                        <h3>{assignor?.username}</h3>
                    </div>
                </div>
                <div className="radio_container_projecttask">
                    {isTaskComplete ?
                        <div className="radio_container_projecttask_icon">
                            <BsBookmarkCheckFill size={24} fill='green' />Completed</div>
                        :
                        projectDetails?.project?.task[projectTaskIndex]?.users?.map((id) => {
                            if (id === CurrentUser?.id) {
                                return (<form className='radio_container_form' >
                                    <label className='radio_container_label'>
                                        <input className='radio_container_input' type="radio" value='complete' name="radio" checked={isRadioSelected('complete')}
                                            onChange={handleRadioClick}
                                        />
                                        <span className='radio_container_span'>Completed</span>
                                    </label>
                                </form>)
                            }
                        })
                    }
                </div>
                <div className='projecttaskmodal_left_actions'>
                    {(projectDetails?.role === 'owner' || assignor?.id === CurrentUser?.id) &&
                        <button className="button-edit" onClick={handleDeleteTask}>Delete Task</button>}
                    {!isTaskComplete &&
                        projectDetails?.project?.task[projectTaskIndex]?.users?.map((id: string) => {
                            if (id === CurrentUser?.id) {
                                return (<div className='projecttaskmodal_left_actions_manage'>
                                    <button className="button-skip" onClick={() => setIsProjectTaskManageModal(false)}>Cancel</button>
                                    <button type='button' className="button-submit"
                                        onClick={handleIsComplete}
                                    >Submit</button>
                                </div>)
                            }
                        })
                    }
                </div>
            </div>
        </div >
    )
}

export default ProjectTaskManageModal