import React from 'react'
import './_Feed.scss'
import { Profile } from '../../models/Model'
import { FollowCounter, Post, Share } from '../index'




const Feed: React.FC<Profile> = ({ profile }) => {
    return (
        <div className='feed'>
            <div className="feed_wrapper">
                {profile ? <FollowCounter /> : <Share />}
                <Post />
            </div>
        </div>
    )
}

export default Feed
