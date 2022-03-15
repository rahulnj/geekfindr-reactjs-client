
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { GetProjectDetailState, Todo } from '../../models'
import './_ProjectTodo.scss'




const ReadOnly = () => {

    const { data: projectDetails }: GetProjectDetailState = useTypedSelector(
        (state) => state.GetProjectDetails
    )

    return (
        <div className="projecttodo_wrapper">
            <div className="projecttodo_wrapper_nostatus">
                <div className='projecttodo_header2'>
                    <h3>No Status</h3>
                </div>
                <hr />
                {projectDetails?.project?.todo[0]?.tasks?.map((todo, index) => (
                    <div key={index} className='projecttodo_singletodo'>
                        {todo}
                    </div>
                ))}
            </div>
            <div className="projecttodo_wrapper_nextup">
                <div className='projecttodo_header2'>
                    <h3>Next Up</h3>
                </div>
                <hr />
                {projectDetails?.project?.todo[1]?.tasks?.map((todo, index) => (
                    <div key={index} className='projecttodo_singletodo'>
                        {todo}
                    </div>
                ))}
            </div>
            <div className="projecttodo_wrapper_inprogress">
                <div className='projecttodo_header2'>
                    <h3>In Progress</h3>
                </div>
                <hr />
                {projectDetails?.project?.todo[2]?.tasks?.map((todo, index) => (
                    <div key={index} className='projecttodo_singletodo'>
                        {todo}
                    </div>
                ))}
            </div>
            <div className="projecttodo_wrapper_completed">
                <div className='projecttodo_header2'>
                    <h3>Completed</h3>
                </div>
                <hr />
                {projectDetails?.project?.todo[3]?.tasks?.map((todo, index) => (
                    <div key={index} className='projecttodo_singletodo'>
                        {todo}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ReadOnly