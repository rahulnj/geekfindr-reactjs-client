import React, { useState } from 'react'
import Modal from '../Modal/Modal'

import './_ProjectTasks.scss'


const ProjectTasks = () => {


    const [isProjectTaskModal, setIsProjectTaskModal] = useState(false)



    return (
        <>
            <Modal isProjectTaskModal={isProjectTaskModal}
                setIsProjectTaskModal={setIsProjectTaskModal} />
            <div className='projecttasks'>
                <div className="projecttasks_header">
                    <h3>Tasks</h3>
                    <div className='projecttasks_input'>
                        <button className="projecttasks_buttonassign"
                            onClick={() => setIsProjectTaskModal(true)}
                        >+ Assign Tasks</button>
                    </div>
                </div>
                <hr />
                <div className='projecttasks_singletask'>
                    <div className='projecttasks_singletask_left'>
                        <h3>
                            Tittle
                        </h3>
                        <p>
                            description for the project tasks.
                        </p>
                    </div>
                    <div className='projecttasks_singletask_center'>
                        <span>
                            badge
                        </span>
                    </div>
                    <div className='projecttasks_singletask_right'>
                        <button className="projecttasks_buttonassign"
                        >Manage</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectTasks