import React, { Fragment, useEffect, useState } from 'react'
import { Params, useParams } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { CommentPostState, CommentProps, GetCommentPostState, GetUsersPostState, PostState, UserData } from '../../models'

import './_Comment.scss'

const Comment = ({ commentPostId, commentPostImg }: CommentProps) => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const { userId }: Readonly<Params<string>> = useParams()
    const [comment, setComment] = useState('')
    const [commentPost, setCommentPost] = useState<any>([])

    const { CommentPost, GetPostComments } = useActions();


    const { data: comments }: GetCommentPostState = useTypedSelector(
        (state) => state.GetPostComments
    )
    const { success: commentSuccess }: CommentPostState = useTypedSelector(
        (state) => state.CommentPost
    )
    let { data: Posts }: PostState = useTypedSelector(
        (state) => state.GetMyPost
    )
    let { data: UsersPosts }: GetUsersPostState = useTypedSelector(
        (state) => state.GetUsersPosts
    )

    if (typeof userId !== "undefined") {
        if (userId != CurrentUser?.id) {
            Posts = UsersPosts
        }
    }

    useEffect(() => {
        GetPostComments({
            token: CurrentUser?.token,
            postId: commentPostId
        })
    }, [commentSuccess])

    useEffect(() => {
        const commentPostDetails = Posts?.filter(
            (post) => post.id === commentPostId
        )
        setCommentPost(commentPostDetails[0])
    }, [])


    const PostCommentHandler = (id: string) => {
        CommentPost({
            token: CurrentUser?.token,
            postId: id,
            comment,
        })
        setComment('')
    }

    return (
        <>
            <div className='comment'>
                <div className="comment_leftside">
                    <div className="comment_leftside_image">
                        <img src={commentPost ? commentPost?.mediaURL : commentPostImg} alt="" />
                    </div>
                </div>
                <div className="comment_rightside">
                    <div className="comment_rightside_wrapper">
                        <label className='comment_label' htmlFor="">Comments</label>
                        <textarea className='comment_input' value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder='Comment here...' />
                        <div className='comment_actions'>
                            <button className='comment_btnpost'
                                onClick={() => PostCommentHandler(commentPostId)}
                            >post</button>
                        </div>
                        <div className='comment_listwrapper'>
                            {comments?.map((comment, index) => (
                                <Fragment key={index}>
                                    <div className="comment_list">
                                        <div className="comment_profileimg">
                                            <img src={comment?.owner?.avatar} alt="" />
                                        </div>
                                        <div className="comment_bodywrapperfollowers">
                                            <div className="comment_body">
                                                <h5>{comment?.owner?.username}</h5>
                                                <p>{comment?.comment}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>
                            ))
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Comment