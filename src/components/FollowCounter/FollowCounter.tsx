import React from 'react'
import './_FollowCounter.scss'

const FollowCount: React.FC = () => {
    return (
        <div className='followcounter'>
            <div className="followcounter_wrapper">
                <div className='followcounter_wrapper_top'>
                    <div className='followcounter_wrapper_top_items'>
                        <span>10</span>
                        <p>Posts</p>
                    </div>
                    <div className='followcounter_wrapper_top_items'>
                        <span>1000</span>
                        <p>followers</p>
                    </div>
                    <div className='followcounter_wrapper_top_items'>
                        <span>1000</span>
                        <p>following</p>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default FollowCount
