import React, { useEffect, useState } from 'react'
import { Params, useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Modal } from '..'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { UserData } from '../../models'

import './_ProjectDescription.scss'

const ProjectDescription: React.FC = () => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const { projectId }: Readonly<Params<string>> = useParams()
    const navigate = useNavigate()
    const { GetProjectDetails, DeleteProject } = useActions();
    const { data: projectDetails }: any = useTypedSelector(
        (state) => state.GetProjectDetails
    )
    const { success: ProjectTodoSuccess }: any = useTypedSelector(
        (state) => state.ProjectTodo
    )
    const { success: projectDescriptionSuccess }: any = useTypedSelector(
        (state) => state.AddProjectDescription
    )
    const { success: projectDeleteSuccess }: any = useTypedSelector(
        (state) => state.ProjectDelete
    )
    const [isProjectDescriptionModal, setIsProjectDescriptionModal] = useState(false)

    useEffect(() => {
        GetProjectDetails({
            token: CurrentUser?.token,
            projectId
        })
    }, [projectDescriptionSuccess, ProjectTodoSuccess, projectDeleteSuccess])
    const handleDeleteProject = async () => {
        const { value: projectname } = await Swal.fire({
            title: `Delete ${projectDetails?.project?.name}`,
            input: 'text',
            inputLabel: `Enter "${projectDetails?.project?.name}" in Uppercase to confirm`,
            inputPlaceholder: 'Enter Project Name in Uppercase'
        })
        if (projectname === projectDetails?.project?.name?.toUpperCase()) {
            DeleteProject({
                token: CurrentUser?.token,
                projectId
            })
            navigate('/')
        } else {
            Swal.fire('Invalid project name')
        }
    }

    return (
        <>
            <Modal isProjectDescriptionModal={isProjectDescriptionModal}
                setIsProjectDescriptionModal={setIsProjectDescriptionModal} />
            <div className='projectdescription'>
                <div className="projectdescription_header">
                    <h3>{projectDetails?.project?.name}</h3>
                    <div>
                        {projectDetails?.project?.description?.length != 0 && projectDetails?.role === 'owner' &&
                            <button className="btnadd" role="button" onClick={() => setIsProjectDescriptionModal(true)}>
                                <span className="btntext">+ Edit Description</span></button>
                        }
                        <button className="btndlt" role="button" onClick={handleDeleteProject}>
                            <span className="btntextdlt">Delete Project</span></button>
                    </div>
                </div>

                <hr />
                {projectDetails?.project?.description?.length === 0 && projectDetails?.role === 'owner' ?
                    <div className='projectdescription_button'>
                        <button className="btnadd" role="button" onClick={() => setIsProjectDescriptionModal(true)}>
                            <span className="btntext">+ Add Description</span></button>
                    </div>
                    : <> <div className="projectdescription_short">
                        <span>{projectDetails?.project?.description}</span>
                    </div>

                    </>}
            </div>
        </>
    )
}

export default ProjectDescription