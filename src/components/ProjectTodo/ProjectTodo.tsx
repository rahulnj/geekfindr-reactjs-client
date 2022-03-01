import React, { useState } from 'react'

import { DragDropContext, Draggable, DraggableProvided, DroppableProvided, DropResult } from "react-beautiful-dnd";
import { Droppable } from 'react-beautiful-dnd'

import './_ProjectTodo.scss'

interface Todo {
    id: number
    todo: string
    // isNoStatus: Boolean
    // isNextUp: boolean
    // isInProgress: boolean
    // isCompleted: boolean
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
                id: Date.now(), todo
            }])
            setTodo('')
        }

    }
    console.log(noStatus);
    const onDragEnd = (result: DropResult) => {
        console.log(result);
        const { source, destination } = result;
        if (!destination) return;

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index)
            return;
        let add: any,
            nostatus = noStatus,
            nextup = nextUp,
            inprogress = inProgress,
            iscompleted = completed

        if (source.droppableId === 'nostatus') {
            add = nostatus[source.index];
            nostatus.splice(source.index, 1)
        } else if (source.droppableId === 'nextup') {
            add = nextup[source.index];
            nextup.splice(source.index, 1)
        } else if (source.droppableId === 'inprogress') {
            add = inprogress[source.index];
            inprogress.splice(source.index, 1)
        } else if (source.droppableId === 'completed') {
            add = iscompleted[source.index];
            iscompleted.splice(source.index, 1)
        }

        if (destination.droppableId === 'nostatus') {
            nostatus.splice(destination.index, 0, add);
        } else if (destination.droppableId === 'nextup') {
            nextup.splice(destination.index, 0, add)
        } else if (destination.droppableId === 'inprogress') {
            inprogress.splice(destination.index, 0, add)
        } else if (destination.droppableId === 'completed') {
            iscompleted.splice(destination.index, 0, add)
        }
        setNoStatus(nostatus)
        setNextUp(nextup)
        setInProgress(inprogress)
        setCompleted(iscompleted)

        const finalTodo = {
            todo: [
                {
                    title: 'nostatus',
                    tasks: noStatus
                },
                {
                    title: 'nextup',
                    tasks: nextUp
                },
                {
                    title: 'inprogress',
                    tasks: inProgress
                },
                {
                    title: 'completed',
                    tasks: completed
                }
            ]
        }
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
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
                    <Droppable droppableId='nostatus'>
                        {(provided: DroppableProvided) => (
                            <div className="projecttodo_wrapper_nostatus"
                                ref={provided.innerRef} {...provided.droppableProps}
                            >
                                <div className='projecttodo_header2'>
                                    <h3>No Status</h3>
                                </div>
                                <hr />
                                {noStatus?.map((todo: Todo, index) => (
                                    <Draggable draggableId={todo.id.toString()} index={index} >
                                        {(provided: DraggableProvided) => (
                                            <div key={todo?.id} className='projecttodo_singletodo'
                                                ref={provided.innerRef} {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                {todo?.todo}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}

                    </Droppable>
                    <Droppable droppableId='nextup'>
                        {(provided: DroppableProvided) => (
                            <div className="projecttodo_wrapper_nextup"
                                ref={provided.innerRef} {...provided.droppableProps}
                            >
                                <div className='projecttodo_header2'>
                                    <h3>Next Up</h3>
                                </div>
                                <hr />
                                {nextUp?.map((todo: Todo, index) => (
                                    <Draggable draggableId={todo.id.toString()} index={index} >
                                        {(provided: DraggableProvided) => (
                                            <div key={todo?.id} className='projecttodo_singletodo'
                                                ref={provided.innerRef} {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                {todo?.todo}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                    <Droppable droppableId='inprogress'>
                        {(provided: DroppableProvided) => (
                            <div className="projecttodo_wrapper_inprogress"
                                ref={provided.innerRef} {...provided.droppableProps}
                            >
                                <div className='projecttodo_header2'>
                                    <h3>In Progress</h3>
                                </div>
                                <hr />
                                {inProgress?.map((todo: Todo, index) => (
                                    <Draggable draggableId={todo.id.toString()} index={index} >
                                        {(provided: DraggableProvided) => (
                                            <div key={todo?.id} className='projecttodo_singletodo'
                                                ref={provided.innerRef} {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                {todo?.todo}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                    <Droppable droppableId='completed'>
                        {(provided: DroppableProvided) => (
                            <div className="projecttodo_wrapper_completed"
                                ref={provided.innerRef} {...provided.droppableProps}
                            >
                                <div className='projecttodo_header2'>
                                    <h3>Completed</h3>
                                </div>
                                <hr />
                                {completed?.map((todo: Todo, index) => (
                                    <Draggable draggableId={todo.id.toString()} index={index} >
                                        {(provided: DraggableProvided) => (
                                            <div key={todo?.id} className='projecttodo_singletodo'
                                                ref={provided.innerRef} {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                {todo?.todo}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>

                </div>
            </div >
        </DragDropContext >
    )
}

export default ProjectTodo