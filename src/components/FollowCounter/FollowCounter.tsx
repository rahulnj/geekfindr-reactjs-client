import React, { useState } from 'react'
import { Link, Params, useParams } from 'react-router-dom'

import './_FollowCounter.scss'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { userProfile, UserProfileState } from '../../models'
import request from '../../api'
import { Modal } from '..'
import { useActions } from '../../hooks/useActions'


const FollowCount = ({ userProfile }: userProfile) => {

    const [followersModal, setFollowersModal] = useState(false)
    const [followingModal, setFollowingModal] = useState(false)


    const { GetUserFollowers, GetFollowingUsers } = useActions();


    const { data: user }: any = useTypedSelector(
        (state) => state.UserSignin
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

    const FollowUser = async (id: string) => {
        const config = {
            headers: {
                "Content-type": "application/json",
                Authorization: `Bearer ${user.token}`,
            },
        };
        try {
            const { data } = await request.post('/api/v1/profiles/following', id, config)
            console.log(data);

        } catch (error) {
            console.log(error);
        }
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
                        <div className='followcounter_wrapper_left_items'>
                            <span>10</span>
                            <p>Posts</p>
                        </div>
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
                        {userProfile ? <button className="button-follow" onClick={() => FollowUser(UserDetails?.id)}>Follow</button> :
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
