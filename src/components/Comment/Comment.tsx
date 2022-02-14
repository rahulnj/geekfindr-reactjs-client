import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector'

import './_Comment.scss'

const Comment = () => {


    const { data: comments }: any = useTypedSelector(
        (state) => state.GetPostComments
    )
    console.log(comments);


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
                        <input className='comment_input' type="text" placeholder='Comment here...' />
                        <div className='comment_actions'>
                            <button className='comment_btnpost'>post</button>
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