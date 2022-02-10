import React from 'react'
import './_Feed.scss'
import { Post, Share } from '../index'
import { Profile } from '../../models'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'




const Feed: React.FC<Profile> = ({ profile }) => {

    const { user }: any = useTypedSelector(
        (state) => state.UserSignin
    )

    const { GetFeedPosts } = useActions();



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
