import React, { useState } from 'react'
import './_Post.scss'
import person1 from '../../assets/persons/1.jpeg'
import post1 from '../../assets/posts/1 (1).jpeg'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'

import request from "../../api"
import axios from 'axios'

import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'
const Post: React.FC = () => {

    const [image, setimage] = useState();

    const imageinput = (e: any) => {
        setimage(e.target.files[0])
    }

    const { user }: any = useTypedSelector(
        (state) => state.UserSignin
    )



    const ImageUpload = async (e: any) => {
        e.preventDefault()
        const uploadconfig = await request.get('/api/v1/uploads/signed-url', {
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'image/jpeg',
            }
        })
        console.log(uploadconfig);
        await axios.put(uploadconfig.data.url, image, {
            headers: {
                'Content-Type': 'image/jpeg'
            }
        })

    }



    return (
        <>
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
                    <form action="" className='post_commentform'>
                        <input type="file" onChange={imageinput} />
                        <button onClick={ImageUpload}>post</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Post;
