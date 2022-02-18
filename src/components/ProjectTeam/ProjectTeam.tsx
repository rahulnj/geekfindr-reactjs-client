import React from 'react'

import './_ProjectTeam.scss'

import post1 from '../../assets/persons/1.jpeg'

const ProjectTeam = () => {
    return (
        <div className='projectteam'>
            <div className="projectteam_header">
                <h3>Teammates</h3>
            </div>
            <hr />
            <div className="projectteam_user">
                <div className="projectteam_user_left">
                    <img src={post1} alt="" />
                    <div className="projectteam_user_left_body">
                        <h5>Rahul</h5>
                        <p>Frontend developer</p>
                    </div>
                </div>
                <div className="projectteam_user_right">
                    {/* space for the buttons */}
                </div>
            </div>
        </div>
    )
}

export default ProjectTeam