import React, { useEffect, useState, Fragment } from 'react'
import Swal from 'sweetalert2'
import './_ProjectTeam.scss'

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { UserData } from '../../models';
import { useActions } from '../../hooks/useActions';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Params, useNavigate, useParams } from 'react-router-dom';

const ProjectTeam = () => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const { projectId }: Readonly<Params<string>> = useParams()
    const { GetProjectDetails, ManageTeamRole, LeaveOrRemoveMembers } = useActions()
    const navigate = useNavigate()
    const [role, setRole] = useState('')
    let { data: projectDetails }: any = useTypedSelector(
        (state) => state.GetProjectDetails
    )
    let { success: LeaveOrRemoveSuccess }: any = useTypedSelector(
        (state) => state.LeaveOrRemoveMembers
    )
    let { success: ManageTeamRoleSuccess }: any = useTypedSelector(
        (state) => state.ManageTeamRole
    )

    useEffect(() => {
        GetProjectDetails({
            token: CurrentUser?.token,
            projectId
        })
    }, [LeaveOrRemoveSuccess, ManageTeamRoleSuccess])

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

    const handleMemberRole = (e: React.MouseEvent<HTMLInputElement>, memberId: string, userName: string): void => {
        setRole(e.currentTarget.value)
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to assign ${userName} as ${e.currentTarget.value}`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#9D0AFF',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Assign'
        }).then((result) => {
            if (result.isConfirmed) {
                ManageTeamRole({
                    token: CurrentUser?.token,
                    role,
                    projectId,
                    memberId
                })
                Swal.fire(
                    'Assigned',
                    `${userName} assigned as ${role}`,
                    'success'
                )
            }
        })
    }

    const acceptMembertoProject = (id: string) => {
        ManageTeamRole({
            token: CurrentUser?.token,
            role: 'collaborator',
            projectId: projectDetails?.project?.id,
            memberId: id
        })
    }

    const removeMemberfromProject = (id: string, userName: string) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to remove ${userName}`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#9D0AFF',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Remove'
        }).then((result) => {
            if (result.isConfirmed) {
                LeaveOrRemoveMembers({
                    token: CurrentUser?.token,
                    memberId: id,
                    projectId: projectDetails?.project?.id
                })
                Swal.fire(
                    'Removed!',
                    `${userName} has been removed.`,
                    'success'
                )
            }
        })
    }

    const leaveTheProject = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: `You want to leave ${projectDetails?.project?.name}?`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#9D0AFF',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Leave'
        }).then((result) => {
            if (result.isConfirmed) {
                LeaveOrRemoveMembers({
                    token: CurrentUser?.token,
                    memberId: CurrentUser?.id,
                    projectId: projectDetails?.project?.id
                })
                navigate('/')
            }
        })
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
                                {(projectDetails?.isOwner || projectDetails?.isAdmin) ?
                                    (projectDetails?.isAdmin && CurrentUser?.id === teammates?.user?.id) ?
                                        <button className="projectteam_user_right_button-leave"
                                            onClick={leaveTheProject}
                                        >Leave</button> :
                                        (projectDetails?.isOwner && CurrentUser?.id === teammates?.user?.id ||
                                            projectDetails?.project?.owner?.id === teammates?.user?.id) ?
                                            <span /> :
                                            ((projectDetails?.isOwner || projectDetails?.isAdmin) && teammates?.role === 'joinRequest') ?
                                                <div className="projectteam_user_right_icons">
                                                    <IoIosCheckmarkCircleOutline className="projectteam_user_right_icons_icontick" size={40}
                                                        onClick={() => { acceptMembertoProject(teammates?.user?.id) }}
                                                    />
                                                    <AiOutlineCloseCircle className="projectteam_user_right_icons_iconclose" size={38}
                                                        onClick={() => { removeMemberfromProject(teammates?.user?.id, teammates?.user?.username) }}
                                                    />
                                                </div> :
                                                (projectDetails?.isAdmin && teammates?.role === 'admin') ? <span /> :
                                                    (projectDetails?.isAdmin && teammates?.role === 'collaborator') ?
                                                        <div className='projectteam_user_right_btnaction'>
                                                            <button className="projectteam_user_right_button-leave"
                                                                onClick={() => { removeMemberfromProject(teammates?.user?.id, teammates?.user?.username) }}
                                                            >Remove</button>
                                                        </div> :
                                                        <>
                                                            <div className='projectteam_user_right_radios'>
                                                                <input className={teammates?.role === 'admin' ? 'projectteam_user_right_input bgbtn' :
                                                                    'projectteam_user_right_input'} id={teammates?.user?.id} value='admin' type="button"
                                                                    onClick={(e) => handleMemberRole(e, teammates?.user?.id, teammates?.user?.username)} />
                                                                <input className={teammates?.role === 'collaborator' ? 'projectteam_user_right_input bgbtn' :
                                                                    'projectteam_user_right_input'} id='myradio2' type="button" value='collaborator'
                                                                    onClick={(e) => handleMemberRole(e, teammates?.user?.id, teammates?.user?.username)} />
                                                            </div>
                                                            <div className='projectteam_user_right_btnaction'>
                                                                <button className="projectteam_user_right_button-leave"
                                                                    onClick={() => { removeMemberfromProject(teammates?.user?.id, teammates?.user?.username) }}
                                                                >Remove</button>
                                                            </div>
                                                        </>
                                    : (projectDetails?.isCollaborator && CurrentUser?.id === teammates?.user?.id) &&
                                    <button className="projectteam_user_right_button-leave"
                                        onClick={leaveTheProject}
                                    >Leave</button>
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