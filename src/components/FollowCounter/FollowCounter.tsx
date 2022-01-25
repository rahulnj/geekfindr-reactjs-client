import React from 'react'
import './_FollowCounter.scss'

const FollowCount: React.FC = () => {
    return (
        <div className='followcounter'>
            <div className="followcounter_wrapper">
                <div className='followcounter_wrapper_left'>
                    <div className='followcounter_wrapper_left_items'>
                        <span>10</span>
                        <p>Posts</p>
                    </div>
                    <div className='followcounter_wrapper_left_items'>
                        <span>1000</span>
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
