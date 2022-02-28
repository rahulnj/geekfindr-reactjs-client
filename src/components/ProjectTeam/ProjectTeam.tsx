import React, { useEffect, useState } from 'react'

import './_ProjectTeam.scss'

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { UserData } from '../../models';
import { useActions } from '../../hooks/useActions';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const ProjectTeam = () => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const [selectedRadioBtn, setSelectedRadioBtn] = useState('admin')

    let { data: projectDetails }: any = useTypedSelector(
        (state) => state.GetProjectDetails
    )

    const { ManageTeamRole } = useActions()


    let isOwner = true;
    projectDetails?.project?.team?.every((member: any) => {
        isOwner = member?.role === 'owner' && member?.user?.id === CurrentUser?.id
        if (isOwner === true) {
            return false
        }
        return true;
    })
    projectDetails = { ...projectDetails, isOwner: isOwner }

    let isAdmin = true;
    projectDetails?.project?.team?.every((member: any) => {
        isAdmin = member?.role === 'admin' && member?.user?.id === CurrentUser?.id
        if (isAdmin == true) {
            return false
        }
        return true;
    })
    projectDetails = { ...projectDetails, isAdmin: isAdmin }

    let isCollaborator = true;
    projectDetails?.project?.team?.every((member: any) => {
        isCollaborator = member?.role === 'collaborator' && member?.user?.id === CurrentUser?.id
        if (isCollaborator === true) {
            return false
        }
        return true;
    })
    projectDetails = { ...projectDetails, isCollaborator: isCollaborator }

    let isJoinRequest = true;
    projectDetails?.project?.team?.every((member: any) => {
        isJoinRequest = member?.role === 'joinRequest' && member?.user?.id === CurrentUser?.id
        if (isJoinRequest === true) {
            return false
        }
        return true;
    })
    projectDetails = { ...projectDetails, isjoinRequest: isJoinRequest }

    console.log(projectDetails);

    const isRadioSelected = (value: string): boolean => selectedRadioBtn === value;

    const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>, memberId: string): void => {
        console.log(e.currentTarget.value);
        setSelectedRadioBtn(e.currentTarget.value)

        // ManageTeamRole({
        //     token: CurrentUser?.token,
        //     role: e.currentTarget.value,
        //     projectId: projectDetails?.id,
        //     memberId
        // })

    }




    return (


        <div className='projectteam'>
            <div className="projectteam_header">
                <h3>Teammates</h3>
            </div>
            <hr />
            {
                projectDetails?.project?.team?.map((teammates: any) => (
                    <>
                        <div className="projectteam_user" key={teammates?.user?.id}>
                            <div className="projectteam_user_left">
                                <img src={teammates?.user?.avatar} alt="profile img" />
                                <div className="projectteam_user_left_body">
                                    <h5>{teammates?.user?.username}</h5>
                                    <p>{teammates?.role}</p>
                                </div>
                            </div>
                            <div className="projectteam_user_right">
                                {(projectDetails?.isOwner || projectDetails?.isAdmin) &&
                                    (projectDetails?.isAdmin && CurrentUser?.id === teammates?.user?.id) ?
                                    <button className="projectteam_user_right_button-leave">Leave</button> :
                                    (projectDetails?.isOwner && CurrentUser?.id === teammates?.user?.id) ?
                                        <span /> :
                                        ((projectDetails?.isOwner || projectDetails?.isAdmin) && teammates?.role === 'joinRequest') ?
                                            <div className="projectteam_user_right_icons">
                                                <IoIosCheckmarkCircleOutline className="projectteam_user_right_icons_icontick" size={40} />
                                                <AiOutlineCloseCircle className="projectteam_user_right_icons_iconclose" size={38} />
                                            </div> :
                                            <div className='projectteam_user_right_radios'>
                                                <input className='projectteam_user_right_input' id='myradio1' value='admin' type="radio"
                                                    checked={isRadioSelected('admin')} onChange={(e) => handleRadioClick(e, teammates?.user?.id)} />
                                                <label htmlFor='myradio1' className='projectteam_user_right_label'>Admin</label>
                                                <input className='projectteam_user_right_input' id='myradio2' type="radio" value='collaborator'
                                                    checked={isRadioSelected('collaborator')} onChange={(e) => handleRadioClick(e, teammates?.user?.id)} />
                                                <label htmlFor='myradio2' className='projectteam_user_right_label'>Collaborator</label>
                                            </div>
                                }
                                {
                                    projectDetails?.isCollaborator &&
                                    <div>
                                        leave
                                    </div>
                                }
                            </div>
                        </div>
                        <hr />
                    </>
                ))
            }

        </div>




    )
}

export default ProjectTeam