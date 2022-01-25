import React from 'react'
import './_Feed.scss'
import { Post, Share } from '../index'
import { Profile } from '../../models'




const Feed: React.FC<Profile> = ({ profile }) => {
    return (
        <div className='feed'>
            <div className="feed_wrapper">
                {profile ? "" : <Share />}
                <Post />
            </div>
        </div>
    )
}

export default Feed
