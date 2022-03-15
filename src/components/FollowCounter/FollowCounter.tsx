import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './_FollowCounter.scss'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { FollowersState, GetUsersPostState, PostState, ProfileProps, UserData, UsersState } from '../../models'
import { Modal } from '..'
import { useActions } from '../../hooks/useActions'


const FollowCount = ({ userProfile }: ProfileProps) => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const [followersModal, setFollowersModal] = useState(false)
    const [followingModal, setFollowingModal] = useState(false)

    const { GetUserFollowers,
        GetFollowingUsers,
        FollowUser,
        UserProfileDetails: UserProfileDetail } = useActions();
    const navigate = useNavigate()

    const { data: UsersPosts }: GetUsersPostState = useTypedSelector(
        (state) => state.GetUsersPosts
    )

    const { data: MyPosts }: PostState = useTypedSelector(
        (state) => state.GetMyPost
    )

    let { data: Followings }: FollowersState = useTypedSelector(
        (state) => state.GetFollowingUsers
    )

    let { data: UserDetails }: UsersState = useTypedSelector(
        (state) => state.GetUserDetails
    )

    let { data: UserProfileDetails }: UsersState = useTypedSelector(
        (state) => state.UserProfileDetails
    )
    const { success: FollowUserSuccess }: FollowersState = useTypedSelector(
        (state) => state.FollowUser
    )

    if (!userProfile) {
        UserDetails = UserProfileDetails
    }


    useEffect(() => {

        GetFollowingUsers({
            token: CurrentUser.token,
            userId: CurrentUser.id,
        })

    }, [FollowUserSuccess])

    if (typeof (UserDetails?.id) !== 'undefined') {
        if (UserDetails?.id !== CurrentUser?.id) {
            let isFollowing = false;
            Followings?.every((following) => {
                isFollowing = following?.id === UserDetails?.id
                if (isFollowing == true) {
                    return false;
                }
                return true;
            })
            UserDetails = { ...UserDetails, isFollowing: isFollowing }
        }
    }

    const HandleFollowUser = async (id: string | undefined) => {
        FollowUser({
            token: CurrentUser?.token,
            userId: id
        })
    }

    const ShowFollowersList = () => {
        GetUserFollowers({
            token: CurrentUser?.token,
            userId: CurrentUser.id,
        })
        setFollowersModal(true)
    }

    const ShowFollowingList = () => {
        GetFollowingUsers({
            token: CurrentUser.token,
            userId: CurrentUser.id,
        })
        setFollowingModal(true)
    }

    const handleEditProfileDetails = () => {
        navigate(`/editprofile/${UserDetails?.id}`)
        UserProfileDetail(CurrentUser?.token)
    }



    return (
        <>
            <Modal followersModal={followersModal} setFollowersModal={setFollowersModal}
                followingModal={followingModal} setFollowingModal={setFollowingModal}
            />
            <div className='followcounter'>
                <div className="followcounter_wrapper">
                    <div className='followcounter_wrapper_left'>
                        {userProfile ? <div className='followcounter_wrapper_left_items'>
                            <span>{UsersPosts.length}</span>
                            <p>Posts</p>
                        </div> :
                            <div className='followcounter_wrapper_left_items'>
                                <span>{MyPosts.length}</span>
                                <p>Posts</p>
                            </div>}
                        {userProfile ? <div className='followcounter_wrapper_left_items'

                        >
                            <span>{UserDetails?.followersCount}</span>
                            <p>followers</p>
                        </div> : <div className='followcounter_wrapper_left_items'
                            onClick={ShowFollowersList}
                        >
                            <span>{UserDetails?.followersCount}</span>
                            <p>followers</p>
                        </div>}
                        {userProfile ? <div className='followcounter_wrapper_left_items'
                        >
                            <span>{UserDetails?.followingCount}</span>
                            <p>following</p>
                        </div> : <div className='followcounter_wrapper_left_items'
                            onClick={ShowFollowingList}
                        >
                            <span>{UserDetails?.followingCount}</span>
                            <p>following</p>
                        </div>}
                    </div>
                    <div className='followcounter_wrapper_right'>
                        {userProfile ?
                            (UserDetails?.isFollowing ? <button className="button-edit">Following</button> :
                                <button className="button-follow" onClick={() => HandleFollowUser(UserDetails?.id)}>Follow</button>) :

                            <button className="button-edit" onClick={handleEditProfileDetails}>Edit</button>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FollowCount
