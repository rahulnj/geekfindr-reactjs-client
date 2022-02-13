import React, { useEffect, useState } from 'react'
import { Link, Params, useParams } from 'react-router-dom'

import './_FollowCounter.scss'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { Profile, profileData, UserProfileState } from '../../models'
import request from '../../api'
import { Modal } from '..'
import { useActions } from '../../hooks/useActions'


const FollowCount = ({ userProfile }: Profile) => {

    const [followersModal, setFollowersModal] = useState(false)
    const [followingModal, setFollowingModal] = useState(false)


    const { GetUserFollowers, GetFollowingUsers, FollowUser } = useActions();


    const { data: user }: any = useTypedSelector(
        (state) => state.UserSignin
    )

    const { data: UsersPosts }: any = useTypedSelector(
        (state) => state.GetUsersPosts
    )

    const { data: MyPosts }: any = useTypedSelector(
        (state) => state.GetMyPost
    )

    const { data: Followers }: any = useTypedSelector(
        (state) => state.GetUserFollowers
    )

    let { data: UserDetails }: any = useTypedSelector(
        (state) => state.GetUserDetails
    )

    let { data: UserProfileDetails }: any = useTypedSelector(
        (state) => state.UserProfileDetails
    )

    if (!userProfile) {
        UserDetails = UserProfileDetails
    }



    const AlreadyFollowed = Followers.filter((follower: profileData) => (follower.id === user.id))

    console.log(AlreadyFollowed, "............");

    useEffect(() => {
        GetUserFollowers({
            token: user.token,
            userId: user.id,
        })
    }, [])

    const HandleFollowUser = async (id: string) => {
        FollowUser({
            token: user.token,
            id
        })
    }

    const ShowFollowersList = () => {
        GetUserFollowers({
            token: user.token,
            userId: user.id,
        })
        setFollowersModal(true)
    }

    const ShowFollowingList = () => {
        GetFollowingUsers({
            token: user.token,
            userId: user.id,
        })
        setFollowingModal(true)
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
                        {userProfile ? AlreadyFollowed ? <button className="button-edit">Following</button> :
                            <button className="button-follow" onClick={() => HandleFollowUser(UserDetails?.id)}>Follow</button> :
                            <Link to={`/editprofile/${UserDetails?.id}`}>
                                <button className="button-edit">Edit</button>
                            </Link>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FollowCount
