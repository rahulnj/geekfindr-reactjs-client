import React, { useEffect } from 'react'
import { Params, useParams } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import './_ProjectDescription.scss'

const ProjectDescription: React.FC = () => {
    const { projectId }: Readonly<Params<string>> = useParams()
    const { GetProjectDetails } = useActions();
    const { data: projectDetails }: any = useTypedSelector(
        (state) => state.GetProjectDetails
    )
    const { data: user }: any = useTypedSelector(
        (state) => state.UserSignin
    )
    useEffect(() => {
        GetProjectDetails({
            token: user.token,
            projectId
        })
    }, [])
    return (
        <div className='projectdescription'>
            <div className="projectdescription_header">
                <h3>{projectDetails?.name}</h3>
            </div>
            <hr />
            <div className="projectdescription_short">
                <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos tenetur ad necessitatibus quaerat ipsa deleniti error pariatur debitis mollitia, eveniet.</span>
            </div>
            <div className="projectdescription_long">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Tempore et consequuntur, optio iusto expedita quia dignissimos quod voluptas officia deleniti. Sunt asperiores eius aliquid ea harum error fugit consequuntur placeat.</p>
            </div>
        </div>
    )
}

export default ProjectDescription