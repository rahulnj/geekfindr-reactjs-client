import React, { useEffect, useState } from 'react'
import { Params, useParams } from 'react-router-dom'
import { Modal } from '..'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { UserData } from '../../models'

import './_ProjectDescription.scss'

const ProjectDescription: React.FC = () => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const { projectId }: Readonly<Params<string>> = useParams()
    const { GetProjectDetails } = useActions();
    const { data: projectDetails }: any = useTypedSelector(
        (state) => state.GetProjectDetails
    )
    const { success: projectDescriptionSuccess }: any = useTypedSelector(
        (state) => state.AddProjectDescription
    )
    const [isProjectDescriptionModal, setIsProjectDescriptionModal] = useState(false)
    useEffect(() => {
        GetProjectDetails({
            token: CurrentUser?.token,
            projectId
        })
    }, [projectDescriptionSuccess])
    return (
        <>
            <Modal isProjectDescriptionModal={isProjectDescriptionModal}
                setIsProjectDescriptionModal={setIsProjectDescriptionModal} />
            <div className='projectdescription'>
                <div className="projectdescription_header">
                    <h3>{projectDetails?.name}</h3>
                </div>
                <hr />
                {projectDetails?.description?.length === 0 ?
                    <div className='projectdescription_button'>
                        <button className="btnadd" role="button" onClick={() => setIsProjectDescriptionModal(true)}>
                            <span className="btntext">+ Add Description</span></button>
                    </div>
                    : <div className="projectdescription_short">
                        <span>{projectDetails?.description}</span>
                    </div>}
            </div>
        </>
    )
}

export default ProjectDescription