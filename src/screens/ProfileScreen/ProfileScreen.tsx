import React, { useEffect } from 'react'

import './_ProfileScreen.scss'

import post1 from '../../assets/posts/3.jpeg'
import { Feed, FollowCounter, RightAside } from '../../components'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { userProfile } from '../../models'
import { Params, useParams } from 'react-router-dom'



const ProfileScreen = ({ userProfile }: userProfile) => {

    const { userId }: Readonly<Params<string>> = useParams()

    const { user }: any = useTypedSelector(
        (state) => state.UserSignin
    )

    const { data: usersDetails }: any = useTypedSelector(
        (state) => state.GetUserDetails
    )

    const { GetUserDetails } = useActions();

    useEffect(() => {
        if (userId !== user.id) {
            GetUserDetails({
                token: user.token,
                userId
            })
        }
    }, [])

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
