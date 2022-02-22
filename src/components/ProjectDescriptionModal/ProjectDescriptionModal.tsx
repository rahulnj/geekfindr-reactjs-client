import React, { useState } from 'react'
import request from '../../api';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ProjectDescriptionModalProps, UserData } from '../../models';

import './_ProjectDescriptionModal.scss'

const ProjectDescriptionModal: React.FC<ProjectDescriptionModalProps> = ({ setIsProjectDescriptionModal }) => {

    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const [description, setDescription] = useState('')

    const { AddProjectDescription } = useActions();
    const { data: projectDetails }: any = useTypedSelector(
        (state) => state.GetProjectDetails
    )
    const handleProjectDescription = async () => {
        AddProjectDescription({
            token: CurrentUser?.token,
            projectId: projectDetails?.id,
            description
        })
        setIsProjectDescriptionModal(false)
    }
    return (
        <div className='desmodal'>
            <div className='desmodal_wrapper'>
                <h4>Description</h4>
                <textarea name="" placeholder='Type here'
                    onChange={(e) => setDescription(e.target.value)} />
                <div className="desmodal_action">
                    <button className='desmodal_button-submit'
                        onClick={handleProjectDescription}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectDescriptionModal