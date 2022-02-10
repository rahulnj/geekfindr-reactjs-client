import React, { useEffect } from 'react'

import './_ProfileScreen.scss'

import post1 from '../../assets/posts/3.jpeg'
import { Feed, FollowCounter, RightAside } from '../../components'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { userProfile } from '../../models'


const ProfileScreen = ({ userProfile }: userProfile) => {

    const { user }: any = useTypedSelector(
        (state) => state.UserSignin
    )

    const { UserProfileDetails, GetMyPost } = useActions();
    useEffect(() => {
        GetMyPost({ token: user.token })
        UserProfileDetails({ token: user.token })
    }, [UserProfileDetails, user, GetMyPost]);






    return (
        <div className='profile'>
            <div className="profile_righttop">
                <div className='profile_righttop_profilecover'>
                    <img className='profile_righttop_profilecoverImg' src={post1} alt="" />
                    <img className='profile_righttop_profileuserImg' src={user?.avatar} alt="" />
                </div>
                <div className="profile_profileinfo">
                    <h4>{user?.username}</h4>
                    <span>backend Developer</span>
                </div>
            </div>
            <FollowCounter userProfile={userProfile} />
            <div className="profile_rightbottom">
                <div className='componentfeed'>
                    <Feed profile />
                </div>
                <div className='componentprofile'>
                    <RightAside profile />
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
