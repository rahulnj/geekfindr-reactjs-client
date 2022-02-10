import React from 'react'
import { Link } from 'react-router-dom'

import './_FollowCounter.scss'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { userProfile, UserProfileState } from '../../models'


const FollowCount = ({ userProfile }: userProfile) => {

    const { data }: UserProfileState = useTypedSelector(
        (state) => state.UserProfileDetails
    )
    const { data: usersDetails }: any = useTypedSelector(
        (state) => state.GetUserDetails
    )

    const { followersCount, followingCount, id }: any = data;

    return (
        <div className='followcounter'>
            <div className="followcounter_wrapper">
                <div className='followcounter_wrapper_left'>
                    <div className='followcounter_wrapper_left_items'>
                        <span>10</span>
                        <p>Posts</p>
                    </div>
                    {userProfile ? <div className='followcounter_wrapper_left_items'>
                        <span>{usersDetails?.followersCount}</span>
                        <p>followers</p>
                    </div> : <div className='followcounter_wrapper_left_items'>
                        <span>{followersCount}</span>
                        <p>followers</p>
                    </div>}
                    {userProfile ? <div className='followcounter_wrapper_left_items'>
                        <span>{usersDetails?.followingCount}</span>
                        <p>following</p>
                    </div> : <div className='followcounter_wrapper_left_items'>
                        <span>{followingCount}</span>
                        <p>following</p>
                    </div>}
                </div>
                <div className='followcounter_wrapper_right'>
                    {userProfile ? <button className="button-follow">Follow</button> :
                        <Link to={`/editprofile/${id}`}>
                            <button className="button-edit">Edit</button>
                        </Link>}
                </div>
            </div>
        </div>
    )
}

export default FollowCount
