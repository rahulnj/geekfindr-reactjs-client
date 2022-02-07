import React from 'react'
import { Link } from 'react-router-dom'

import './_FollowCounter.scss'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { UserProfileState } from '../../models'


const FollowCount: React.FC = () => {

    const { data }: UserProfileState = useTypedSelector(
        (state) => state.UserProfileDetails
    )


    const { followers, following, id }: any = data;

    return (
        <div className='followcounter'>
            <div className="followcounter_wrapper">
                <div className='followcounter_wrapper_left'>
                    <div className='followcounter_wrapper_left_items'>
                        <span>10</span>
                        <p>Posts</p>
                    </div>
                    <div className='followcounter_wrapper_left_items'>
                        <span>{followers?.length}</span>
                        <p>followers</p>
                    </div>
                    <div className='followcounter_wrapper_left_items'>
                        <span>{following?.length}</span>
                        <p>following</p>
                    </div>
                </div>
                <div className='followcounter_wrapper_right'>
                    {/* <button className="button-follow">Follow</button> */}
                    <Link to={`/editprofile/${id}`}>
                        <button className="button-edit">Edit</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default FollowCount
