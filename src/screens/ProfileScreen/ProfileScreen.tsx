import React, { useEffect } from 'react'

import './_ProfileScreen.scss'

import post1 from '../../assets/posts/3.jpeg'
import { Feed, FollowCounter, RightAside } from '../../components'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { ProfileProps } from '../../models'
import { Params, useParams } from 'react-router-dom'



const ProfileScreen = ({ userProfile }: ProfileProps) => {

    const { userId }: Readonly<Params<string>> = useParams()

    const { user }: any = useTypedSelector(
        (state) => state.UserSignin
    )
    const { data: usersDetails }: any = useTypedSelector(
        (state) => state.GetUserDetails
    )

    const { GetUsersPosts, GetUserDetails, GetMyPost, UserProfileDetails } = useActions();

    useEffect(() => {
        console.log("yes");

        if (userProfile) {
            GetUserDetails({
                token: user.token,
                userId
            })
            GetUsersPosts({
                token: user.token,
                userId
            })
        } else {
            GetMyPost({
                token: user.token,
            })
            UserProfileDetails({
                token: user.token
            })
        }
    }, [userProfile])

    return (
        <div className='profile'>
            <div className="profile_righttop">
                {userProfile ? <div className='profile_righttop_profilecover'>
                    <img className='profile_righttop_profilecoverImg' src={post1} alt="" />
                    <img className='profile_righttop_profileuserImg' src={usersDetails?.avatar} alt="" />
                </div> : <div className='profile_righttop_profilecover'>
                    <img className='profile_righttop_profilecoverImg' src={post1} alt="" />
                    <img className='profile_righttop_profileuserImg' src={user?.avatar} alt="" />
                </div>}
                {userProfile ? <div className="profile_profileinfo">
                    <h4>{usersDetails?.username}</h4>
                    <span>{usersDetails?.role}</span>
                </div> : <div className="profile_profileinfo">
                    <h4>{user?.username}</h4>
                    <span>{user?.role}</span>
                </div>}
            </div>
            <FollowCounter userProfile={userProfile} />
            <div className="profile_rightbottom">
                <div className='componentfeed'>
                    <Feed profile userProfile={userProfile} />
                </div>
                <div className='componentprofile'>
                    <RightAside profile />
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
