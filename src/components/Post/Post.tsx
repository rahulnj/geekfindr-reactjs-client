import React, { useEffect, useRef, useState } from 'react'

import './_Post.scss'
import Swal from 'sweetalert2'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineLike, AiFillLike } from 'react-icons/ai'
import { BiComment, BiEdit } from 'react-icons/bi'
import { MdOutlineDeleteOutline } from 'react-icons/md'

import { AuthState, CommentPostState, DeletePostState, GetUsersPostState, LikePostState, PostData, PostState, ProfileProps, UserData } from '../../models'

import { useTypedSelector } from '../../hooks/useTypedSelector'

import Moment from 'react-moment';
import { useActions } from '../../hooks/useActions'
import { Link, Params, useNavigate, useParams } from 'react-router-dom'
import { Modal, Spinner, HomePost, PostSkeleton } from '..'


const Post: React.FC<ProfileProps> = ({ profile, userProfile }) => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);

    const [isEditModalOpened, setIsEditModalOpened] = useState(false)
    const [isCommentModalOpened, setIsCommentModalOpened] = useState(false)
    const [commentPostId, setCommentPostId] = useState('')
    const [commentPostImg, setCommentPostImg] = useState('')

    const { userId }: Readonly<Params<string>> = useParams()
    const { LikePost, GetUsersPosts, GetMyPost, TeamJoinRequest } = useActions();

    let { data: ProfilePosts, loading: ProfilePostsLoading, success: ProfilePostsSuccess }: PostState = useTypedSelector(
        (state) => state.GetMyPost
    )
    let { data: SearchedUsersPosts, loading: SearchedUsersPostsLoading, success: SeachedUsersPostsSuccess }: GetUsersPostState = useTypedSelector(
        (state) => state.GetUsersPosts
    )
    const { success: EditPostSuccess }: PostState = useTypedSelector(
        (state) => state.EditPost
    )
    const { success: LikeSuccess, loading: likeLoading }: LikePostState = useTypedSelector(
        (state) => state.LikePost
    )
    const { success: DeleteSuccess }: DeletePostState = useTypedSelector(
        (state) => state.DeletePost
    )
    const { success: CommentSuccess }: CommentPostState = useTypedSelector(
        (state) => state.CommentPost
    )
    if (userProfile) {
        ProfilePosts = SearchedUsersPosts
        ProfilePostsLoading = SearchedUsersPostsLoading
        ProfilePostsSuccess = SeachedUsersPostsSuccess
    }

    useEffect(() => {
        if (userProfile) {
            GetUsersPosts({
                token: CurrentUser?.token,
                userId
            })
        } else {
            GetMyPost({
                token: CurrentUser?.token,
            })
        }
    }, [LikeSuccess, DeleteSuccess, EditPostSuccess, CommentSuccess])

    const PostLikeHandler = (id: string) => {
        LikePost({
            token: CurrentUser?.token,
            postId: id
        })
    }


    const CommentHandler = (id: string, mediaURL: string) => {
        setIsCommentModalOpened(true)
        setCommentPostId(id)
        setCommentPostImg(mediaURL)

    }

    ProfilePosts = ProfilePosts?.map((post: PostData) => {
        let isLiked = post?.likes?.find((like) => (like?.owner === CurrentUser?.id))
        return { ...post, isLiked: !!isLiked }
    })
    const handleTeamJoinRequest = (projectId: string) => {
        TeamJoinRequest({
            token: CurrentUser?.token,
            projectId
        })
    }


    const MyProfilePosts = ({ description, isProject, likeCount,
        commentCount, mediaURL, createdAt,
        comments, id, owner, isLiked }: PostData) => {

        const { DeletePost } = useActions();
        const navigate = useNavigate();

        const ref = useRef<any>();
        const [toggleOptions, setToggleOptions] = useState(false)


        const TogglePostOptions = () => {
            setToggleOptions(true)
        }

        const DeleteMyPost = () => {
            Swal.fire({
                title: 'Are you sure?',
                text: "You want to delete this post?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#9D0AFF',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Delete'
            }).then((result) => {
                if (result.isConfirmed) {
                    DeletePost({ postId: id, token: CurrentUser?.token, navigate, userId: CurrentUser?.id })
                    setToggleOptions(false)
                    Swal.fire(
                        'Deleted!',
                        'Post has been deleted.',
                        'success'
                    )
                }
            })
        }


        useEffect(() => {
            const checkIfClickedOutside = (e: MouseEvent) => {
                if (toggleOptions && ref.current && !ref.current.contains(e.target)) {
                    setToggleOptions(false)
                }
            }
            document.addEventListener("mousedown", checkIfClickedOutside)
            return () => {
                document.removeEventListener("mousedown", checkIfClickedOutside)
            }
        }, [toggleOptions])

        return (
            <>
                <div className='post' >
                    <div className="post_wrapper">
                        <div className="post_top">
                            <div className="post_top_left">
                                <img src={CurrentUser?.avatar} alt="" />
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
                                    <Link to={`/editpost/${id}`} style={{ textDecoration: 'none' }}>
                                        <li onClick={() => setIsEditModalOpened(true)}>
                                            <BiEdit size={21} className='post_top_right_options_icons' />
                                            <span className='post_top_right_options_link1'>Edit</span></li>
                                    </Link>
                                    {!isProject &&
                                        <li onClick={DeleteMyPost}><MdOutlineDeleteOutline size={21} className='post_top_right_options_icons' />
                                            <span className='post_top_right_options_link2'>Delete</span></li>
                                    }

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
                                            onClick={() => { PostLikeHandler(id) }}
                                        />}
                                    {likeCount}</div>
                                <div className='post_bottom_left_icons'><BiComment size={21} className='post_bottom_left_icon'
                                    onClick={() => CommentHandler(id, mediaURL)} />{commentCount}</div>
                            </div>
                            {/* {isProject &&
                                <div className="post_bottom_right">
                                    <AiOutlineUsergroupAdd className='post_bottom_left_icon' size={28}
                                        onClick={() => handleTeamJoinRequest(id)}
                                    />
                                </div>} */}
                        </div>
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
                commentPostId={commentPostId} commentPostImg={commentPostImg} />
            {profile ?
                (!ProfilePostsLoading) ?
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
                    )))
                    :
                    <PostSkeleton />
                :
                <HomePost
                    setIsCommentModalOpened={setIsCommentModalOpened}
                    setCommentPostId={setCommentPostId}
                    CommentHandler={CommentHandler}
                />
            }
        </>
    )
}

export default Post;
