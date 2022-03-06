import React, { useEffect, useState } from 'react'
import { Params, useParams } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ProjectDescriptionModalProps, UserData } from '../../models';

import './_ProjectDescriptionModal.scss'

const ProjectDescriptionModal: React.FC<ProjectDescriptionModalProps> = ({ setIsProjectDescriptionModal }) => {

    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const { projectId }: Readonly<Params<string>> = useParams()
    const [description, setDescription] = useState('')

    const { AddProjectDescription } = useActions();
    const { data: projectDetails }: any = useTypedSelector(
        (state) => state.GetProjectDetails
    )
    useEffect(() => {
        setDescription(projectDetails?.project?.description)
    }, [])

    const handleProjectDescription = async () => {
        AddProjectDescription({
            token: CurrentUser?.token,
            projectId,
            description
        })
        setIsProjectDescriptionModal(false)
    }
    return (
        <div className='desmodal'>
            <div className='desmodal_wrapper'>
                <h4>Description</h4>
                <textarea name="" placeholder='Type here' value={description}
                    onChange={(e) => setDescription(e.target.value)} />
                <div className="desmodal_action">
                    {description.length < 0 ? <button className='desmodal_button-submit'
                        onClick={handleProjectDescription}>Add</button>
                        :
                        <button className='desmodal_button-submit'
                            onClick={handleProjectDescription}>Save</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProjectDescriptionModal