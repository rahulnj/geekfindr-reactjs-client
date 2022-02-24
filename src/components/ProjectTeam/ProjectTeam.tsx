import React, { useEffect, useState } from 'react'

import './_ProjectTeam.scss'

import post1 from '../../assets/persons/1.jpeg'
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { UserData } from '../../models';

const ProjectTeam = () => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const [selectedRadioBtn, setSelectedRadioBtn] = useState('admin')

    const { data: projectDetails }: any = useTypedSelector(
        (state) => state.GetProjectDetails
    )

    const isRadioSelected = (value: string): boolean => selectedRadioBtn === value;

    const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(e.currentTarget.value);

        setSelectedRadioBtn(e.currentTarget.value)
        if (e.currentTarget.value === 'project') {

        } else if (e.currentTarget.value === 'post') {

        }
    }




    return (


        <div className='projectteam'>
            <div className="projectteam_header">
                <h3>Teammates</h3>
            </div>
            <hr />
            {
                projectDetails?.team?.map((teammates: any) => (
                    <div className="projectteam_user" key={teammates?.user?.id}>
                        <div className="projectteam_user_left">
                            <img src={teammates?.user?.avatar} alt="profile img" />
                            <div className="projectteam_user_left_body">
                                <h5>{teammates?.user?.username}</h5>
                                <p>{teammates?.role}</p>
                            </div>
                        </div>
                        <div className="projectteam_user_right">
                            <div className='projectteam_user_right_radios'>
                                <input className='projectteam_user_right_input' id='myradio1' value='admin' type="radio"
                                    checked={isRadioSelected('admin')} onChange={handleRadioClick} />
                                <label htmlFor='myradio1' className='projectteam_user_right_label'>Admin</label>
                                <input className='projectteam_user_right_input' id='myradio2' type="radio" value='collaborator'
                                    checked={isRadioSelected('collaborator')} onChange={handleRadioClick} />
                                <label htmlFor='myradio2' className='projectteam_user_right_label'>Collaborator</label>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>




    )
}

export default ProjectTeam