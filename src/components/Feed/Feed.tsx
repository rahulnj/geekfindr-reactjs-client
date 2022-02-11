import React, { useEffect, useState } from 'react'
import './_Feed.scss'
import { Post, Share } from '../index'
import { PostState, Profile } from '../../models'





const Feed: React.FC<Profile> = ({ profile }) => {

    return (
        <div className='feed'>
            <div className="feed_wrapper">
                {profile ? "" : <Share />}
                <Post profile={profile} />
            </div>
        </div>
    )
}

export default Feed
