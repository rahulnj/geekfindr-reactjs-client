import { useCallback, useRef, useState } from "react"

import { AiFillLike, AiOutlineLike } from "react-icons/ai"
import { BiComment } from "react-icons/bi"
import { BsThreeDotsVertical } from "react-icons/bs"

import Moment from "react-moment"
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll"

import { HomePostProps, PostData, UserData } from "../../models"


const HomePosts = ({ LikePostHandler, CommentHandler }: HomePostProps) => {

    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);

    const [lastPostId, setLastPostId] = useState<string>('')
    const observer = useRef<any>()

    let { feedPosts, hasMore } = useInfiniteScroll(lastPostId)


    const lastFeedPostRef = useCallback(node => {
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                console.log("visible");
                const newArray = feedPosts.reverse()
                const lastFetchedPostId = newArray[0]?.id
                setLastPostId(lastFetchedPostId)

            }
        })
        if (node) observer.current.observe(node)
        console.log(lastPostId);
    }, [hasMore, lastPostId])


    feedPosts = feedPosts?.map((post: PostData) => {
        let isLiked = post?.likes?.find((like: any) => (like?.owner === CurrentUser?.id))
        return { ...post, isLiked: !!isLiked }
    })


    return (

        feedPosts?.map((post: PostData, index: number) => {
            if (feedPosts.length === index + 1) {

                return (

                    <div className='post' ref={lastFeedPostRef} key={feedPosts?.id}>
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
                                                onClick={() => { LikePostHandler(post?.id) }}
                                            />}
                                        {post?.likeCount}</div>
                                    <div className='post_bottom_left_icons'><BiComment onClick={() =>
                                        CommentHandler(post?.id)} size={21} className='post_bottom_left_icon' />{post?.commentCount}</div>
                                </div>
                            </div>
                            <form className='post_commentform'>
                                {/* <BiSmile size={24} className='post_commentform_icons' />
                    <input onChange={GetComment} type="text" placeholder='Add a comment...' />
                    <button type='submit'>post</button> */}
                            </form>
                        </div>
                    </div>

                )
            } else {

                return (
                    <div className='post' key={feedPosts?.id}>
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
                                                onClick={() => { LikePostHandler(post?.id) }}
                                            />}
                                        {post?.likeCount}</div>
                                    <div className='post_bottom_left_icons'><BiComment onClick={() =>
                                        CommentHandler(post?.id)} size={21} className='post_bottom_left_icon' />{post?.commentCount}</div>
                                </div>
                            </div>
                            <form className='post_commentform'>
                                {/* <BiSmile size={24} className='post_commentform_icons' />
                <input onChange={GetComment} type="text" placeholder='Add a comment...' />
                <button type='submit'>post</button> */}
                            </form>
                        </div>
                    </div>)
            }
        })

    )
}

export default HomePosts;