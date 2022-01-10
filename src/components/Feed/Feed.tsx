import React from 'react'
import { Post, Share } from '../index'
import './_Feed.scss'
const Feed: React.FC = () => {
    return (
        <div className='feed'>
            <div className="feed_wrapper">
                <Share />
                <Post />
            </div>
        </div>
    )
}

export default Feed
