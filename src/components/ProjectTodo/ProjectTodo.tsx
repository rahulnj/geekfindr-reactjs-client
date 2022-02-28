import React from 'react'

import './_ProjectTodo.scss'


const ProjectTodo = () => {
    return (
        <div className='projecttodo'>
            <div className='projecttodo_header'>
                <h3>Status</h3>
            </div>
            <hr />
            <div className="projecttodo_wrapper">
                <div className="projecttodo_wrapper_nostatus">
                    <div className='projecttodo_header2'>
                        <h3>No Status</h3>
                    </div>
                    <hr />

                </div>
                <div className="projecttodo_wrapper_nextup">
                    <div className='projecttodo_header2'>
                        <h3>Next Up</h3>
                    </div>
                    <hr />
                </div>
                <div className="projecttodo_wrapper_inprogress">
                    <div className='projecttodo_header2'>
                        <h3>In Progress</h3>
                    </div>
                    <hr />
                </div>
                <div className="projecttodo_wrapper_completed">
                    <div className='projecttodo_header2'>
                        <h3>Completed</h3>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default ProjectTodo