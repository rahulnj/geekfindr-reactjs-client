import React, { useEffect, useRef, useState } from 'react'
import './_Post.scss'


import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import { BiComment, BiSmile, BiEdit } from 'react-icons/bi'
import { MdOutlineDeleteOutline } from 'react-icons/md'

import { PostDataState, Profile, profileData } from '../../models'

import { useTypedSelector } from '../../hooks/useTypedSelector'

import Moment from 'react-moment';
import { useActions } from '../../hooks/useActions'
import { Link, Params, useNavigate, useParams } from 'react-router-dom'
import { Modal } from '..'


const Post: React.FC<Profile> = ({ profile, userProfile }) => {

    const [isEditModalOpened, setIsEditModalOpened] = useState(false)

    const { userId }: Readonly<Params<string>> = useParams()
    const { GetFeedPosts, LikePost, GetUsersPosts, GetMyPost } = useActions();

    const { user }: any = useTypedSelector(
        (state) => state.UserSignin
    )
    let { data: ProfilePosts, loading: ProfilePostsLoading }: any = useTypedSelector(
        (state) => state.GetMyPost
    )
    let { data: SearchedUsersPosts, loading: SearchedUsersPostsLoading }: any = useTypedSelector(
        (state) => state.GetUsersPosts
    )
    let { data: FeedPosts, loading: FeedPostsLoading }: any = useTypedSelector(
        (state) => state.GetMyFeed
    )
    const { success: LikeSuccess }: any = useTypedSelector(
        (state) => state.LikePost
    )

    if (userProfile) {
        ProfilePosts = SearchedUsersPosts
        ProfilePostsLoading = SearchedUsersPostsLoading
    }

    useEffect(() => {
        if (userProfile) {
            GetUsersPosts({
                token: user.token,
                userId
            })
        } else {
            GetMyPost({
                token: user.token,
            })
        }
    }, [LikeSuccess])



    //////////////////////////////////////////////////////////////////////

    //changes to be made (!important)
    const [nextPostId, setNextPostId] = useState('')




    useEffect(() => {
        const newArray = FeedPosts.reverse()
        const lastPostId = newArray[0]?.id
        setNextPostId(lastPostId)
        GetFeedPosts({
            token: user.token,
            limit: 5,
            lastPostId
        })
    }, [LikeSuccess])

    //////////////////////////////////////////////////////////////////////


    const LikePostHandler = (id: string) => {

        LikePost({
            token: user.token,
            postId: id
        })
    }


    const CommentPostHandler = (e: React.FormEvent) => {
        e.preventDefault();
    }

    FeedPosts = FeedPosts?.map((post: PostDataState) => {
        let isLiked = post?.likes?.find((like: any) => (like?.owner === user.id))
        return { ...post, isLiked: !!isLiked }
    })


    ProfilePosts = ProfilePosts?.map((post: PostDataState) => {
        let isLiked = post?.likes?.find((like: any) => (like?.owner === user.id))
        return { ...post, isLiked: !!isLiked }
    })


    const HomePosts = ({ description, isProject, likeCount, mediaURL, commentCount, createdAt, comments, id, owner, isLiked }: PostDataState) => {
        return (

            <div className='post'>
                <div className="post_wrapper">
                    <div className="post_top">
                        <div className="post_top_left">
                            <img src={owner?.avatar} alt="" />
                            <div className='post_top_left_details'>
                                <p className="post_top_left_username">{owner?.username}</p>
                                <span className="post_top_left_date"><Moment fromNow>{createdAt}</Moment></span>
                            </div>
                        </div>
                        <div className="post_top_right">
                            <BsThreeDotsVertical className='post_top_right_threedot' />
                        </div>
                    </div>
                    <div className="post_center">
                        <span className="post_description">{description}</span>
                        <img className='post_homeimg' src={mediaURL} alt="" />
                    </div>
                    <div className="post_bottom">
                        <div className="post_bottom_left">
                            <div className='post_bottom_left_icons'>
                                {isLiked ? <AiFillLike size={21} className='post_bottom_left_icon_liked' /> :
                                    <AiOutlineLike size={21} className='post_bottom_left_icon'
                                        onClick={() => { LikePostHandler(id) }}
                                    />}
                                {likeCount}</div>
                            <div className='post_bottom_left_icons'><BiComment size={21} className='post_bottom_left_icon' />{commentCount}</div>
                        </div>
                    </div>
                    <form onSubmit={CommentPostHandler} className='post_commentform'>
                        <BiSmile size={24} className='post_commentform_icons' />
                        <input type="text" placeholder='Add a comment...' />
                        <button>post</button>
                    </form>
                </div>
            </div>
        )
    }


    const MyProfilePosts = ({ description, isProject, likeCount, commentCount, mediaURL, createdAt, comments, id, owner, isLiked }: PostDataState) => {

        const { DeletePost } = useActions();
        const navigate = useNavigate();

        const { user }: any = useTypedSelector(
            (state) => state.UserSignin
        )

        const ref = useRef<any>();
        const [toggleOptions, setToggleOptions] = useState(false)


        const TogglePostOptions = () => {
            setToggleOptions(true)
        }

        const DeleteMyPost = () => {
            DeletePost({ postId: id, token: user.token, navigate, userId: user.id })
            setToggleOptions(false)
        }


        useEffect(() => {
            const checkIfClickedOutside = (e: MouseEvent) => {
                if (toggleOptions && ref.current && !ref.current.contains(e.target)) {
                    setToggleOptions(false)
                }
            }
            document.addEventListener("mousedown", checkIfClickedOutside)
            return () => {
                document.addEventListener("mousedown", checkIfClickedOutside)
            }
        }, [toggleOptions])



        return (
            <>
                <div className='post' >
                    <div className="post_wrapper">
                        <div className="post_top">
                            <div className="post_top_left">
                                <img src={user?.avatar} alt="" />
                                <div className='post_top_left_details'>
                                    <p className="post_top_left_username">{owner?.username}</p>
                                    <span className="post_top_left_date"><Moment fromNow>{createdAt}</Moment></span>
                                </div>
                            </div>
                            <div className="post_top_right">
                                <BsThreeDotsVertical className='post_top_right_threedot' onClick={TogglePostOptions} />
                            </div>
                            <div ref={ref} className={toggleOptions ? "post_top_right_options active" : "post_top_right_options"}>
                                <ul>
                                    <Link to={`/editpost/${id}`} style={{ textDecoration: 'none' }}><li onClick={() => setIsEditModalOpened(true)}><BiEdit size={21} className='post_top_right_options_icons' /><span className='post_top_right_options_link1'>Edit</span></li></Link>
                                    <li onClick={DeleteMyPost}><MdOutlineDeleteOutline size={21} className='post_top_right_options_icons' /><span className='post_top_right_options_link2'>Delete</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="post_center">
                            <span className="post_description">{description}</span>
                            <img className='post_profileimg' src={mediaURL} alt="" />
                        </div>
                        <div className="post_bottom">
                            <div className="post_bottom_left">
                                <div className='post_bottom_left_icons'>
                                    {isLiked ? <AiFillLike size={21} className='post_bottom_left_icon_liked' /> :
                                        <AiOutlineLike size={21} className='post_bottom_left_icon'
                                            onClick={() => { LikePostHandler(id) }}
                                        />}
                                    {likeCount}</div>
                                <div className='post_bottom_left_icons'><BiComment size={21} className='post_bottom_left_icon' />{commentCount}</div>
                            </div>
                        </div>
                        <form onSubmit={CommentPostHandler} className='post_commentform'>
                            <BiSmile size={24} className='post_commentform_icons' />
                            <input type="text" placeholder='Add a comment...' />
                            <button>post</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }

    return (

        <>
            <Modal isEditModalOpened={isEditModalOpened} setIsEditModalOpened={setIsEditModalOpened} />
            {profile ?
                //  (ProfilePosts.length === 0) ?
                //     (<LoadorAdd />) :
                (ProfilePosts.map((post: PostDataState) => (
                    < MyProfilePosts key={post.id}
                        description={post.description}
                        isProject={post.isProject}
                        likeCount={post.likeCount}
                        mediaURL={post.mediaURL}
                        createdAt={post.createdAt}
                        comments={post.comments}
                        id={post.id}
                        owner={post.owner}
                        commentCount={post.commentCount}
                        isLiked={post.isLiked}
                    />
                ))) :
                FeedPosts?.map((post: PostDataState) => (
                    <HomePosts key={post.id}
                        description={post.description}
                        isProject={post.isProject}
                        likeCount={post.likeCount}
                        mediaURL={post.mediaURL}
                        createdAt={post.createdAt}
                        comments={post.comments}
                        id={post.id}
                        owner={post.owner}
                        commentCount={post.commentCount}
                        isLiked={post.isLiked}
                    />

                ))
            }
        </>
    )
}

export default Post;
