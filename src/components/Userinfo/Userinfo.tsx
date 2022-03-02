import React, { useEffect } from 'react';

import './_Userinfo.scss'

import { GiOfficeChair } from 'react-icons/gi'
import { GrOrganization, GrCertificate } from 'react-icons/gr'
import { FaBusinessTime } from 'react-icons/fa'
import { IoIosArrowForward } from 'react-icons/io'
import { ProfileRightAsideProps, UserData } from '../../models';
import { Params, useParams } from 'react-router-dom';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const Userinfo = ({ userProfile }: ProfileRightAsideProps) => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);

    const { userId }: Readonly<Params<string>> = useParams()
    const { GetUserDetails, UserProfileDetails } = useActions()
    let { data: currentUserDetails, loading: currentUserDetailsLoading }: any = useTypedSelector(
        (state) => state.UserProfileDetails
    )
    let { data: usersDetails, loading: UsersDetailsLoading }: any = useTypedSelector(
        (state) => state.GetUserDetails
    )
    if (!userProfile) {
        usersDetails = currentUserDetails
        UsersDetailsLoading = currentUserDetailsLoading
    }

    return (
        <div className='userinfo'>
            <h3>Bio</h3>
            <p>{usersDetails?.bio}</p>
            <hr />
            <ul >
                {/* <li><GiOfficeChair className='userinfo_icons' size={26} />
                    <details className='userinfo_details'>
                        <summary className='userinfo_summary'>Work<IoIosArrowForward className='arrow' /></summary>
                        <div className="detailscontent">
                            <p>crossroads academy</p>
                        </div>
                    </details>
                </li>
                <hr /> */}
                <li><GrOrganization className='userinfo_icons' size={26} />
                    <details className='userinfo_details'>
                        <summary className='userinfo_summary'>Organization<IoIosArrowForward className='arrow' /></summary>
                        {usersDetails?.organizations?.map((organization: string[]) => (
                            <div className="detailscontent">
                                <p>{organization}</p>
                            </div>
                        ))}
                    </details>
                </li>

                <hr />
                <li><FaBusinessTime className='userinfo_icons' size={26} />
                    <details className='userinfo_details'>
                        <summary className='userinfo_summary'>Experience<IoIosArrowForward className='arrow' /></summary>
                        <div className="detailscontent">
                            <p>{usersDetails?.experience}</p>
                        </div>
                    </details>
                </li>
                <hr />
                <li><GrCertificate className='userinfo_icons' size={26} />
                    <details className='userinfo_details'>
                        <summary className='userinfo_summary'>Education<IoIosArrowForward className='arrow' /></summary>
                        {usersDetails?.organizations?.map((education: string[]) => (
                            <div className="detailscontent">
                                <p>{education}</p>
                            </div>
                        ))}
                    </details>
                </li>
            </ul>
        </div>
    )
};

export default Userinfo;
