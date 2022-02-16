import React, { useEffect, useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { CommentProps } from '../../models'

import './_Comment.scss'

const Comment = ({ commentPostId }: CommentProps) => {
    const [comment, setComment] = useState('')

    const { CommentPost, GetPostComments } = useActions();

    const { user }: any = useTypedSelector(
        (state) => state.UserSignin
    )
    const { data: comments }: any = useTypedSelector(
        (state) => state.GetPostComments
    )
    const { success: commentSuccess }: any = useTypedSelector(
        (state) => state.CommentPost
    )
    console.log(commentSuccess);

    useEffect(() => {
        GetPostComments({
            token: user.token,
            postId: commentPostId
        })
    }, [commentSuccess])


    const PostCommentHandler = (id: string) => {
        CommentPost({
            token: user.token,
            postId: id,
            comment
        })
    }

    return (
        <>
            <div className='comment'>
                <div className="comment_leftside">
                    <div className="comment_leftside_image">
                        <img src="" alt="" />
                    </div>
                </div>
                <div className="comment_rightside">
                    <div className="comment_rightside_wrapper">
                        <label className='comment_label' htmlFor="">Comments</label>
                        <input className='comment_input' type="text"
                            onChange={(e) => setComment(e.target.value)}
                            placeholder='Comment here...' />
                        <div className='comment_actions'>
                            <button className='comment_btnpost'
                                onClick={() => PostCommentHandler(commentPostId)}
                            >post</button>
                        </div>

                        {comments?.map((comment: any, index: number) => (
                            <div key={index} className="comment_list">
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
                        ))
                        }

                    </div>
                </div>
            </div>


        </>
    )
}

export default Comment