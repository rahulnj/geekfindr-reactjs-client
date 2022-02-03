import React, { useState } from 'react';

import './_PostUploadModal.scss'

import { AddPostModalState } from '../../models';





const PostUploadModal = ({ isModalOpened, setIsModalOpened }: AddPostModalState) => {
    const [selectedImage, SetSelectedImage] = useState<any>(null)

    const HandlePostUpload = (e: any) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            console.log(reader.result);
            SetSelectedImage(reader.result)
        }
    }

    return (
        <div className={selectedImage ? 'postmodal' : 'postmodal_none'}>
            <div className='postmodal_leftside'>
                <h3>Create new post</h3>
                <img src={selectedImage} alt="" />
                <input type="file" onChange={HandlePostUpload} />

            </div>
            <div className={selectedImage ? 'postmodal_rightside' : 'postmodal_none_rightside'}>
                <div className='postmodal_rightside_captionwrapper'>
                    <label className='postmodal_rightside_label'>Caption</label>
                    <textarea className='postmodal_rightside_textarea' placeholder='Hey .....' ></textarea>
                </div>
                <div className='postmodal_rightside_buttonwrapper'>
                    <button className='postmodal_rightside_buttonwrapper_cancel' onClick={() => setIsModalOpened(false)}>Cancel</button>
                    <button className='postmodal_rightside_buttonwrapper_post'>Post</button>
                </div>
            </div>
        </div>
    )
};

export default PostUploadModal;
