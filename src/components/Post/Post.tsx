import React, { useState } from 'react'
import './_Post.scss'
import person1 from '../../assets/persons/1.jpeg'
import post1 from '../../assets/posts/1 (1).jpeg'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { BiComment, BiSmile } from 'react-icons/bi'
import { Profile } from '../../models'


const Post: React.FC<Profile> = ({ profile }) => {
    console.log(profile);


    const CommentPostHandler = (e: any) => {
        e.preventDefault();
    }

    const HomePosts = () => {
        return (
            <div className='post'>
                <div className="post_wrapper">
                    <div className="post_top">
                        <div className="post_top_left">
                            <img src={person1} alt="" />
                            <div className='post_top_left_details'>
                                <p className="post_top_left_username">Rahul</p>
                                <span className="post_top_left_date">5 mins ago</span>
                            </div>
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
                            <div className='post_bottom_left_icons'><AiOutlineLike size={21} className='post_bottom_left_icon' />50</div>
                            <div className='post_bottom_left_icons'><BiComment size={21} className='post_bottom_left_icon' />15</div>
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

    const MyProfilePosts = () => {
        return (
            <div className='post'>
                <div className="post_wrapper">
                    <div className="post_top">
                        <div className="post_top_left">
                            <img src={person1} alt="" />
                            <div className='post_top_left_details'>
                                <p className="post_top_left_username">Rahul</p>
                                <span className="post_top_left_date">5 mins ago</span>
                            </div>
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
                            <div className='post_bottom_left_icons'><AiOutlineLike size={21} className='post_bottom_left_icon' />50</div>
                            <div className='post_bottom_left_icons'><BiComment size={21} className='post_bottom_left_icon' />15</div>
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

    return (
        <>
            {profile ? <MyProfilePosts /> : <HomePosts />}
        </>
    )
}

export default Post;
