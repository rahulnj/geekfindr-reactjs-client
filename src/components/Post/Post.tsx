import React, { useCallback, useEffect, useRef, useState } from 'react'

import './_Post.scss'

import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import { BiComment, BiEdit } from 'react-icons/bi'
import { MdOutlineDeleteOutline } from 'react-icons/md'

import { PostData, ProfileProps } from '../../models'

import { useTypedSelector } from '../../hooks/useTypedSelector'

import Moment from 'react-moment';
import { useActions } from '../../hooks/useActions'
import { Link, Params, useNavigate, useParams } from 'react-router-dom'
import { Modal, Spinner, HomePost } from '..'


const Post: React.FC<ProfileProps> = ({ profile, userProfile }) => {

    const [isEditModalOpened, setIsEditModalOpened] = useState(false)
    const [isCommentModalOpened, setIsCommentModalOpened] = useState(false)
    const [commentPostId, setCommentPostId] = useState('')

    const { userId }: Readonly<Params<string>> = useParams()
    const { GetFeedPosts, LikePost,
        GetUsersPosts, GetMyPost
    } = useActions();

    const { user, loading }: any = useTypedSelector(
        (state) => state.UserSignin
    )
    let { data: ProfilePosts, loading: ProfilePostsLoading }: any = useTypedSelector(
        (state) => state.GetMyPost
    )
    let { data: SearchedUsersPosts, loading: SearchedUsersPostsLoading }: any = useTypedSelector(
        (state) => state.GetUsersPosts
    )
    // let { data: FeedPosts, loading: FeedPostsLoading }: any = useTypedSelector(
    //     (state) => state.GetMyFeed
    // )
    const { success: LikeSuccess, loading: likeLoading }: any = useTypedSelector(
        (state) => state.LikePost
    )
    const { success: DeleteSuccess }: any = useTypedSelector(
        (state) => state.DeletePost
    )

    if (userProfile) {
        ProfilePosts = SearchedUsersPosts
        ProfilePostsLoading = SearchedUsersPostsLoading
    }

    useEffect(() => {
        if (userProfile) {
            GetUsersPosts({
                token: user?.token,
                userId
            })
        } else {
            GetMyPost({
                token: user?.token,
            })
        }
    }, [LikeSuccess, DeleteSuccess])

    const LikePostHandler = (id: string) => {
        LikePost({
            token: user?.token,
            postId: id
        })
    }

    const CommentHandler = (id: string) => {
        setIsCommentModalOpened(true)
        setCommentPostId(id)

    }

    ProfilePosts = ProfilePosts?.map((post: PostData) => {
        let isLiked = post?.likes?.find((like: any) => (like?.owner === user?.id))
        return { ...post, isLiked: !!isLiked }
    })



    const MyProfilePosts = ({ description, isProject, likeCount, commentCount, mediaURL, createdAt, comments, id, owner, isLiked }: PostData) => {

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
                            {!userProfile && <div ref={ref} className={toggleOptions ? "post_top_right_options active" : "post_top_right_options"}>
                                <ul>
                                    <Link to={`/editpost/${id}`} style={{ textDecoration: 'none' }}><li onClick={() => setIsEditModalOpened(true)}><BiEdit size={21} className='post_top_right_options_icons' /><span className='post_top_right_options_link1'>Edit</span></li></Link>
                                    <li onClick={DeleteMyPost}><MdOutlineDeleteOutline size={21} className='post_top_right_options_icons' /><span className='post_top_right_options_link2'>Delete</span></li>
                                </ul>
                            </div>}
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
                        <form className='post_commentform'>
                        </form>
                    </div>
                </div>
            </>
        )
    }
    return (

        <>
            <Spinner loader={likeLoading} />
            <Modal isEditModalOpened={isEditModalOpened} setIsEditModalOpened={setIsEditModalOpened}
                isCommentModalOpened={isCommentModalOpened} setIsCommentModalOpened={setIsCommentModalOpened}
                commentPostId={commentPostId} />
            {profile ?
                //  (ProfilePosts.length === 0) ?
                //     (<LoadorAdd />) :
                (ProfilePosts.map((post: PostData) => (
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
                ))) : <HomePost
                    setIsCommentModalOpened={setIsCommentModalOpened}
                    setCommentPostId={setCommentPostId}
                    LikePostHandler={LikePostHandler}
                    CommentHandler={CommentHandler}
                />
            }
        </>
    )
}

export default Post;
