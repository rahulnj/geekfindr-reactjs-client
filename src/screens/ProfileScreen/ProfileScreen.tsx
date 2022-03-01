import React, { useEffect } from 'react'

import './_ProfileScreen.scss'

import post1 from '../../assets/posts/banner1.jpg'
import { BaseSkeleton, Feed, FollowCounter, FollowCounterSkeleton, RightAside } from '../../components'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
import { ProfileProps, UserData } from '../../models'
import { Params, useParams } from 'react-router-dom'



const ProfileScreen = ({ userProfile }: ProfileProps) => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);

    const { userId }: Readonly<Params<string>> = useParams()
    const { GetUsersPosts, GetUserDetails, GetMyPost, UserProfileDetails } = useActions();

    let { user, loading: ProfileDetailsLoading }: any = useTypedSelector(
        (state) => state.UserSignin
    )
    let { data: usersDetails, loading: SearchedUsersDetailsLoading }: any = useTypedSelector(
        (state) => state.GetUserDetails
    )

    if (userProfile) {
        user = usersDetails
        ProfileDetailsLoading = SearchedUsersDetailsLoading
    }
    useEffect(() => {
        if (userProfile) {
            GetUserDetails({
                token: CurrentUser?.token,
                userId
            })
            GetUsersPosts({
                token: CurrentUser?.token,
                userId
            })
        } else {
            GetMyPost({
                token: CurrentUser?.token,
            })
            UserProfileDetails(CurrentUser?.token)
        }
    }, [userProfile, userId])
    return (
        <div className='profile'>
            <div className="profile_righttop">
                {!ProfileDetailsLoading ? <div className='profile_righttop_profilecover'>
                    <img className='profile_righttop_profilecoverImg' src={post1} alt="" />
                    <img className='profile_righttop_profileuserImg' id='profileimg' src={user?.avatar} alt="" />
                </div> :
                    <div className='profile_righttop_profilecover'>
                        <div className='profile_righttop_profilecoverImg'>
                            <BaseSkeleton type='rectangle-lg' />
                        </div>
                        <div className='profile_righttop_profileuserImg'>
                            <BaseSkeleton type='avatar-lg' />
                        </div>
                    </div>
                }
                {!ProfileDetailsLoading ? <div className="profile_profileinfo">
                    <h4>{user?.username}</h4>
                    <span>{user?.role}</span>
                </div> :
                    <div className="profile_profileinfo">
                        <BaseSkeleton type='title' />
                        <BaseSkeleton type='title-sm' />
                    </div>
                }
            </div>
            {!ProfileDetailsLoading ? <FollowCounter userProfile={userProfile} /> :
                <FollowCounterSkeleton theme='' />
            }
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
