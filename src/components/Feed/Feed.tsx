import React from 'react'
import './_Feed.scss'
import { Post } from '../index'
import { ProfileProps } from '../../models'

const Feed: React.FC<ProfileProps> = ({ profile, userProfile }) => {

    return (
        <div className='feed'>
            <div className="feed_wrapper">
                {/* {profile ? "" : <Share />} */}
                <Post profile={profile}
                    userProfile={userProfile}
                />
            </div>
        </div>
    )
}

export default Feed;
