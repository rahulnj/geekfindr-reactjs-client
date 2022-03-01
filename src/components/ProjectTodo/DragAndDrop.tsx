import React from 'react'
import './_ProjectTodo.scss'
import { Draggable, DraggableProvided, DroppableProvided } from "react-beautiful-dnd";
import { Droppable } from 'react-beautiful-dnd'
import { ProjectTodoDragandDropProps, Todo } from '../../models';



const DragAndDrop = ({ noStatus, nextUp, inProgress, completed }: ProjectTodoDragandDropProps) => {










    return (
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
    )
}

export default DragAndDrop