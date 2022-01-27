import React from 'react'

import './_FollowCounter.scss'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { UserProfileState } from '../../models'

const FollowCount: React.FC = () => {

    const { data }: UserProfileState = useTypedSelector(
        (state) => state.UserProfileDetails
    )
    // const { followers, following } = data;

    return (
        <div className='followcounter'>
            <div className="followcounter_wrapper">
                <div className='followcounter_wrapper_left'>
                    <div className='followcounter_wrapper_left_items'>
                        <span>10</span>
                        <p>Posts</p>
                    </div>
                    <div className='followcounter_wrapper_left_items'>
                        <span>324</span>
                        <p>followers</p>
                    </div>
                    <div className='followcounter_wrapper_left_items'>
                        <span>1000</span>
                        <p>following</p>
                    </div>
                </div>
                <div className='followcounter_wrapper_right'>
                    {/* <button className="button-follow">Follow</button> */}
                    <button className="button-edit">Edit</button>
                </div>
            </div>
        </div>
    )
}

export default FollowCount
