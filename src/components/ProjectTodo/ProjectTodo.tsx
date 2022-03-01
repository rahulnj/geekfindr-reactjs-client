import React, { useState } from 'react'

import './_ProjectTodo.scss'

interface Todo {
    id: number
    todo: string
    isNoStatus: Boolean
    isNextUp: boolean
    isInProgress: boolean
    isCompleted: boolean
}
const ProjectTodo = () => {

    const [todo, setTodo] = useState('')
    const [noStatus, setNoStatus] = useState<Todo[]>([])
    const [nextUp, setNextUp] = useState<Todo[]>([])
    const [inProgress, setInProgress] = useState<Todo[]>([])
    const [completed, setCompleted] = useState<Todo[]>([])


    const handleAddTodo = () => {
        if (todo) {
            setNoStatus([...noStatus, {
                id: Date.now(), todo, isNoStatus: true,
                isNextUp: false, isInProgress: false, isCompleted: false
            }])
            setTodo('')
        }
        const finalTodo = {
            todo: [
                {
                    title: 'nostatus',
                    tasks: [
                        ...noStatus,
                    ]
                },
                {
                    title: 'nextup',
                    tasks: [

                    ]
                },
                {
                    title: 'inprogress',
                    tasks: [

                    ]
                },
                {
                    title: 'completed',
                    tasks: [

                    ]
                }
            ]
        }
    }
    console.log(noStatus);


    return (
        <div className='projecttodo'>
            <div className='projecttodo_header'>
                <h3>Status</h3>
                <div className='projecttodo_input'>
                    {/* <label>Add +</label> */}
                    <input type="text" placeholder='Add ...' value={todo}
                        onChange={(e) => setTodo(e.target.value)} />
                    <button className="projecttodo_buttonadd"
                        onClick={handleAddTodo}
                    >Add+</button>
                </div>
            </div>
            <hr />
            <div className="projecttodo_wrapper">
                <div className="projecttodo_wrapper_nostatus">
                    <div className='projecttodo_header2'>
                        <h3>No Status</h3>
                    </div>
                    <hr />
                    {noStatus?.map((todo: Todo) => (
                        <div key={todo?.id} className='projecttodo_singletodo'>
                            {todo?.todo}
                        </div>
                    ))
                    }


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