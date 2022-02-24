import { useCallback, useRef, useState } from "react"

import { AiFillLike, AiOutlineLike, AiOutlineUsergroupAdd } from "react-icons/ai"
import { BiComment } from "react-icons/bi"
import { BsThreeDotsVertical } from "react-icons/bs"

import Moment from "react-moment"
import { HomePostSkeleton } from ".."
import { useActions } from "../../hooks/useActions"
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll"
import { useTypedSelector } from "../../hooks/useTypedSelector"

import { HomePostProps, PostData, UserData } from "../../models"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"


const HomePosts = ({ CommentHandler }: HomePostProps) => {

    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const { user }: any = useTypedSelector(
        (state) => state.UserSignin
    )

    const { LikePost, TeamJoinRequest } = useActions()
    const [lastPostId, setLastPostId] = useState()
    const observer = useRef<any>()

    let { feedPosts, hasMore, loading, setFeedPosts } = useInfiniteScroll({ lastPostId })
    console.log(feedPosts);

    const lastFeedPostRef = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                const newArray = feedPosts.reverse()
                const lastFetchedPostId = newArray[0]?.id
                setLastPostId(lastFetchedPostId)
            }
        })
        if (node) observer.current.observe(node)
    }, [hasMore, loading])

    const FeedPostLikeHandler = (id: string) => {
        let updatedFeed = feedPosts?.map((post: any) => {
            if (post?.id === id) {
                post.likes = [...post?.likes, { owner: CurrentUser?.id }]
                post.likeCount = post?.likeCount + 1
            }
            return post;
        })

        setFeedPosts(updatedFeed)

        LikePost({
            token: user?.token,
            postId: id
        })
    }

    feedPosts = feedPosts?.map((post: PostData) => {
        let isLiked = post?.likes?.find((like: any) => (like?.owner === CurrentUser?.id))
        return { ...post, isLiked: !!isLiked }
    })

    const handleTeamJoinRequest = (projectId: string) => {
        let updatedFeed = feedPosts?.map((post: any) => {
            if (post?.id === projectId) {
                post.teamJoinRequests = [...post?.teamJoinRequests, { owner: CurrentUser?.id }]
                post.teamJoinRequestCount = post?.teamJoinRequestCount + 1
            }
            return post;
        })

        setFeedPosts(updatedFeed)

        TeamJoinRequest({
            token: user?.token,
            projectId
        })
    }
    feedPosts = feedPosts?.map((post: PostData) => {
        let isJoined = post?.teamJoinRequests?.find((requests: any) => (requests?.owner === CurrentUser?.id))
        return { ...post, isJoined: !!isJoined }
    })


    return (
        (!loading) ?
            feedPosts?.map((post: PostData, index: number) => {
                if (feedPosts.length === index + 1) {
                    return (
                        <div className='post' ref={lastFeedPostRef} key={randomId()}>
                            <div className="post_wrapper">
                                <div className="post_top">
                                    <div className="post_top_left">
                                        <img src={post?.owner?.avatar} alt="" />
                                        <div className='post_top_left_details'>
                                            <p className="post_top_left_username">{post?.owner?.username}</p>
                                            <span className="post_top_left_date"><Moment fromNow>{post?.createdAt}</Moment></span>
                                        </div>
                                    </div>
                                    <div className="post_top_right">
                                        <BsThreeDotsVertical className='post_top_right_threedot' />
                                    </div>
                                </div>
                                <div className="post_center">
                                    <span className="post_description">{post?.description}</span>
                                    <img className='post_homeimg' src={post?.mediaURL} alt="" />
                                </div>
                                <div className="post_bottom">
                                    <div className="post_bottom_left">
                                        <div className='post_bottom_left_icons'>
                                            {post?.isLiked ? <AiFillLike size={21} className='post_bottom_left_icon_liked' /> :
                                                <AiOutlineLike size={21} className='post_bottom_left_icon'
                                                    onClick={() => { FeedPostLikeHandler(post?.id) }}
                                                />}
                                            {post?.likeCount}</div>
                                        <div className='post_bottom_left_icons'><BiComment onClick={() =>
                                            CommentHandler(post?.id)} size={21} className='post_bottom_left_icon' />{post?.commentCount}</div>
                                    </div>
                                    {
                                        post?.isProject &&
                                        <div className="post_bottom_right">
                                            {(post?.isJoined) ?
                                                <div className="post_bottom_right_icons">Requested<IoMdCheckmarkCircleOutline
                                                    className='post_bottom_right_icon_request' size={26} />
                                                </div> :
                                                <AiOutlineUsergroupAdd className='post_bottom_right_icon' size={28}
                                                    onClick={() => handleTeamJoinRequest(post?.id)}
                                                />}
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                    )
                } else {

                    return (
                        <div className='post' key={randomId()}>
                            <div className="post_wrapper">
                                <div className="post_top">
                                    <div className="post_top_left">
                                        <img src={post?.owner?.avatar} alt="" />
                                        <div className='post_top_left_details'>
                                            <p className="post_top_left_username">{post?.owner?.username}</p>
                                            <span className="post_top_left_date"><Moment fromNow>{post?.createdAt}</Moment></span>
                                        </div>
                                    </div>
                                    <div className="post_top_right">
                                        <BsThreeDotsVertical className='post_top_right_threedot' />
                                    </div>
                                </div>
                                <div className="post_center">
                                    <span className="post_description">{post?.description}</span>
                                    <img className='post_homeimg' src={post?.mediaURL} alt="" />
                                </div>
                                <div className="post_bottom">
                                    <div className="post_bottom_left">
                                        <div className='post_bottom_left_icons'>
                                            {post?.isLiked ? <AiFillLike size={21} className='post_bottom_left_icon_liked' /> :
                                                <AiOutlineLike size={21} className='post_bottom_left_icon'
                                                    onClick={() => { FeedPostLikeHandler(post?.id) }}
                                                />}
                                            {post?.likeCount}
                                        </div>
                                        <div className='post_bottom_left_icons'><BiComment onClick={() =>
                                            CommentHandler(post?.id)} size={21} className='post_bottom_left_icon' />{post?.commentCount}
                                        </div>
                                    </div>
                                    {
                                        post?.isProject &&
                                        <div className="post_bottom_right">
                                            {(post?.isJoined) ?
                                                <div className="post_bottom_right_icons">Requested <IoMdCheckmarkCircleOutline
                                                    className='post_bottom_right_icon_request' size={26} />
                                                </div> :
                                                <AiOutlineUsergroupAdd className='post_bottom_right_icon' size={28}
                                                    onClick={() => handleTeamJoinRequest(post?.id)}
                                                />}
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>)
                }
            })
            : <HomePostSkeleton theme="light" />
    )
}
const randomId = () => {
    return Math.random().toString(36).substring(2, 5);
};
export default HomePosts;