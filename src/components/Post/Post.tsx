import React from 'react'
import './_Post.scss'
import person1 from '../../assets/persons/1.jpeg'
import post1 from '../../assets/posts/1 (1).jpeg'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'

const Post: React.FC = () => {
    return (
        <>
            <div className='post'>
                <div className="post_wrapper">
                    <div className="post_top">
                        <div className="post_top_left">
                            <img src={person1} alt="" />
                            <span className="post_top_left_username">Rahul</span>
                            <span className="post_top_left_date">5 mins ago</span>
                        </div>
                        <div className="post_top_right">
                            <BsThreeDotsVertical className='post_top_right_threedot' />
                        </div>
                    </div>
                    <div className="post_center">
                        <span className="post_description">Lorem ipsum dolor sit amet consectetur.</span>
                        <img src={post1} alt="" />
                    </div>
                    <div className="post_bottom">
                        <div className="post_bottom_left">
                            <AiOutlineLike className='post_bottom_left_icons' />
                            <BiComment className='post_bottom_left_icons' />
                            <span className="post_bottom_left_likecounter">10 people liked this</span>
                        </div>
                        <div className="post_bottom_right">
                            {/* <span className="post_commenttext">10</span> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className='post'>
                <div className="post_wrapper">
                    <div className="post_top">
                        <div className="post_top_left">
                            <img src={person1} alt="" />
                            <span className="post_top_left_username">Rahul</span>
                            <span className="post_top_left_date">5 mins ago</span>
                        </div>
                        <div className="post_top_right">
                            <BsThreeDotsVertical className='post_top_right_threedot' />
                        </div>
                    </div>
                    <div className="post_center">
                        <span className="post_description">Lorem ipsum dolor sit amet consectetur.</span>
                        <img src={post1} alt="" />
                    </div>
                    <div className="post_bottom">
                        <div className="post_bottom_left">
                            <AiOutlineLike className='post_bottom_left_icons' />
                            <BiComment className='post_bottom_left_icons' />
                            <span className="post_bottom_left_likecounter">10 people liked this</span>
                        </div>
                        <div className="post_bottom_right">
                            {/* <span className="post_commenttext">10</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post
