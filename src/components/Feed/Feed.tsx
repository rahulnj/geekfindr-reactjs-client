import React, { useEffect, useState } from 'react'
import './_Feed.scss'
import { Post, Share } from '../index'
import { PostState, ProfileProps } from '../../models'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'





const Feed: React.FC<ProfileProps> = ({ profile, userProfile }) => {
    const [nextPostId, setNextPostId] = useState('')

    const { GetFeedPosts } = useActions();

    let { data: FeedPosts, loading: FeedPostsLoading }: any = useTypedSelector(
        (state) => state.GetMyFeed
    )
    const { user }: any = useTypedSelector(
        (state) => state.UserSignin
    )

    useEffect(() => {
        const newArray = FeedPosts.reverse()
        const lastPostId = newArray[0]?.id
        setNextPostId(lastPostId)
        GetFeedPosts({
            token: user.token,
            limit: 5,
            lastPostId
        })
    }, [])

    return (
        <div className='feed'>
            <div className="feed_wrapper">
                {profile ? "" : <Share />}
                <Post profile={profile}
                    userProfile={userProfile}
                />
            </div>
        </div>
    )
}

export default Feed;
