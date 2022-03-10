import React, { useEffect, useState } from 'react'
import './_Feed.scss'
import { Post, Share } from '../index'
import { PostState, ProfileProps } from '../../models'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'





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
