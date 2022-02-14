import React, { useState } from 'react'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import './_Comment.scss'

const Comment = () => {
    const [comment, setComment] = useState('')

    const { CommentPost } = useActions();

    const { user }: any = useTypedSelector(
        (state) => state.UserSignin
    )

    const { data: comments }: any = useTypedSelector(
        (state) => state.GetPostComments
    )

    console.log(comments);
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
                                onClick={() => PostCommentHandler("620922fefb9e9e198ace78f6")}
                            >post</button>
                        </div>

                        <div className="comment_list">
                            <div className="comment_profileimg">
                                <img src='' alt="" />
                            </div>
                            <div className="comment_bodywrapperfollowers">
                                <div className="comment_body">
                                    <h5>hello</h5>
                                    <p></p>
                                </div>
                            </div>
                        </div >

                    </div>
                </div>
            </div>


        </>
    )
}

export default Comment