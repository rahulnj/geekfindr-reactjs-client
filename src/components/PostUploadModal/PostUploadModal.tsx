import React, { useState } from 'react';

import './_PostUploadModal.scss'

import { AddPostModalState } from '../../models';





const PostUploadModal = ({ isModalOpened, setIsModalOpened }: AddPostModalState) => {
    const [UploadFile, SetUploadFile] = useState<any>('')

    const HandlePostUpload = (e: any) => {
        const file = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            console.log(reader.result);
            SetUploadFile(reader.result)
        }
    }

    return (
        <div className='postmodal'>
            <div className='postmodal_leftside'>
                <img src={UploadFile} alt="" />
                <input type="file" onChange={HandlePostUpload} />
            </div>
            <div className={'postmodal_rightside'}>
                <div className='postmodal_rightside_captionwrapper'>
                    <label>Caption</label>
                    <textarea name="" placeholder='Hey .....' ></textarea>
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
