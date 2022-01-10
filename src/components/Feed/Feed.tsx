import React from 'react'
import { Share } from '../index'
import './_Feed.scss'
const Feed: React.FC = () => {
    return (
        <div className='feed'>
            <div className="feed_wrapper">
                <Share />
            </div>
        </div>
    )
}

export default Feed
