import React from 'react'
import { Link, Params, useParams } from 'react-router-dom'

import './_FollowCounter.scss'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { userProfile, UserProfileState } from '../../models'


const FollowCount = ({ userProfile }: userProfile) => {



    let { data: UserDetails }: any = useTypedSelector(
        (state) => state.GetUserDetails
    )

    let { data: UserProfileDetails }: any = useTypedSelector(
        (state) => state.UserProfileDetails
    )

    if (!userProfile) {
        UserDetails = UserProfileDetails
    }








    return (
        <div className='followcounter'>
            <div className="followcounter_wrapper">
                <div className='followcounter_wrapper_left'>
                    <div className='followcounter_wrapper_left_items'>
                        <span>10</span>
                        <p>Posts</p>
                    </div>
                    {userProfile ? <div className='followcounter_wrapper_left_items'>
                        <span>{UserDetails?.followersCount}</span>
                        <p>followers</p>
                    </div> : <div className='followcounter_wrapper_left_items'>
                        <span>{UserDetails?.followersCount}</span>
                        <p>followers</p>
                    </div>}
                    {userProfile ? <div className='followcounter_wrapper_left_items'>
                        <span>{UserDetails?.followingCount}</span>
                        <p>following</p>
                    </div> : <div className='followcounter_wrapper_left_items'>
                        <span>{UserDetails?.followingCount}</span>
                        <p>following</p>
                    </div>}
                </div>
                <div className='followcounter_wrapper_right'>
                    {userProfile ? <button className="button-follow">Follow</button> :
                        <Link to={`/editprofile/${UserDetails?.id}`}>
                            <button className="button-edit">Edit</button>
                        </Link>}
                </div>
            </div>
        </div>
    )
}

export default FollowCount
