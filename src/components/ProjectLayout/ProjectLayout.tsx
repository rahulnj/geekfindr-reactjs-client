import React from 'react'

import './_ProjectLayout.scss'

const ProjectLayout = () => {
    return (
        <div className='projectlayout'>
            <div className="projectlayout_header">
                <h3>Brocode</h3>
                <p>Started 3 days ago</p>
            </div>
            <div className='projectlayout_wrapper'>
                <div className="projectlayout_titles">
                    <div className='projectlayout_title1'>
                        <span>
                            <h3>Description</h3>
                        </span>
                    </div>
                    <div className='projectlayout_title'>Team</div>
                    <div className='projectlayout_title'>Todo</div>
                    <div className='projectlayout_title'>Tasks</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectLayout