import React, { useEffect, useState } from 'react'
import './_Feed.scss'
import { Post, Share } from '../index'
import { PostState, Profile } from '../../models'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'




const Feed: React.FC<Profile> = ({ profile }) => {


    const [nextPostId, setNextPostId] = useState('')

    const { user }: any = useTypedSelector(
        (state) => state.UserSignin
    )

    const { data: FeedPosts }: any = useTypedSelector(
        (state) => state.GetMyFeed
    )




    const { GetFeedPosts } = useActions();
    useEffect(() => {
        const newArray = FeedPosts.reverse()
        const lastPostId = newArray[0]?.id
        console.log(lastPostId);
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
                <Post profile={profile} />
            </div>
        </div>
    )
}

export default Feed
