import React, { useEffect, useState } from 'react'

import { DragDropContext, Draggable, DraggableProvided, DroppableProvided, DropResult } from "react-beautiful-dnd";
import { Droppable } from 'react-beautiful-dnd'
import { Params, useParams } from 'react-router-dom';
import { DragAndDrop, ReadOnly } from '..';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Todo, UserData } from '../../models';

import './_ProjectTodo.scss'


const ProjectTodo = () => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const { projectId }: Readonly<Params<string>> = useParams()
    const { ProjectTodo } = useActions();

    const { success: ProjectTodoSuccess }: any = useTypedSelector(
        (state) => state.ProjectTodo
    )
    const { data: projectDetails }: any = useTypedSelector(
        (state) => state.GetProjectDetails
    )

    const [todo, setTodo] = useState('')
    const [noStatus, setNoStatus] = useState<Todo[]>([])
    const [nextUp, setNextUp] = useState<Todo[]>([])
    const [inProgress, setInProgress] = useState<Todo[]>([])
    const [completed, setCompleted] = useState<Todo[]>([])



    useEffect(() => {
        let fetchedNoStatus, fetchedNextUp, fetchedInProgress, fetchedCompleted;
        fetchedNoStatus = projectDetails?.project?.todo[0]?.tasks?.map((todo: any) => {
            return { id: Math.random().toString(36).substr(2, 9), todo: todo }
        })
        if (fetchedNoStatus) {
            setNoStatus(fetchedNoStatus)
        }
        fetchedNextUp = projectDetails?.project?.todo[1]?.tasks?.map((todo: any) => {
            return { id: Math.random().toString(36).substr(2, 9), todo: todo }
        })
        if (fetchedNextUp) {
            setNextUp(fetchedNextUp)
        }

        fetchedInProgress = projectDetails?.project?.todo[2]?.tasks?.map((todo: any) => {
            return { id: Math.random().toString(36).substr(2, 9), todo: todo }
        })
        if (fetchedInProgress) {
            setInProgress(fetchedInProgress)
        }
        fetchedCompleted = projectDetails?.project?.todo[3]?.tasks?.map((todo: any) => {
            return { id: Math.random().toString(36).substr(2, 9), todo: todo }
        })
        if (fetchedCompleted) {
            setCompleted(fetchedCompleted)
        }
    }, [])
    const handleAddTodo = () => {
        if (todo) {
            setNoStatus([...noStatus, {
                id: Date.now(), todo
            }])
            setTodo('')
        }
    }
    const onDragEnd = (result: DropResult) => {
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

        let updatedNostatus: string[] = [];
        nostatus.forEach((todo: any) => {
            updatedNostatus.push(todo.todo)
        })
        let updatedNextup: string[] = [];
        nextup.forEach((todo: any) => {
            updatedNextup.push(todo.todo)
        })
        let updatedInprogress: string[] = [];
        inprogress.forEach((todo: any) => {
            updatedInprogress.push(todo.todo)
        })
        let updatedCompleted: string[] = [];
        iscompleted.forEach((todo: any) => {
            updatedCompleted.push(todo.todo)
        })

        const finalTodo = {
            todo: [
                {
                    title: 'nostatus',
                    tasks: updatedNostatus
                },
                {
                    title: 'nextup',
                    tasks: updatedNextup
                },
                {
                    title: 'inprogress',
                    tasks: updatedInprogress
                },
                {
                    title: 'completed',
                    tasks: updatedCompleted
                }
            ]
        }


        ProjectTodo({
            token: CurrentUser?.token,
            projectId,
            Todo: finalTodo
        })
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='projecttodo'>
                <div className='projecttodo_header'>
                    <h3>Status</h3>
                    {projectDetails?.role === 'owner' ? <div className='projecttodo_input'>
                        <input type="text" placeholder='Add ...' value={todo}
                            onChange={(e) => setTodo(e.target.value)} />
                        <button className="projecttodo_buttonadd"
                            onClick={handleAddTodo}
                        >Add+</button>
                    </div> : <label>Read Only</label>}
                </div>
                <hr />
                {projectDetails?.role === 'owner' ?
                    <DragAndDrop
                        noStatus={noStatus}
                        nextUp={nextUp}
                        inProgress={inProgress}
                        completed={completed} /> :
                    <ReadOnly />}
            </div >
        </DragDropContext >
    )
}

export default ProjectTodo