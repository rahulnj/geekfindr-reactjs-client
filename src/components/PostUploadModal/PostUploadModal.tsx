import React, { useState } from 'react';

import './_PostUploadModal.scss'

import { FiUpload } from 'react-icons/fi'

const PostUploadModal = () => {
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
            <div className='postmodal_rightside'>
                <div className='postmodal_rightside_captionwrapper'>
                    <label>Caption</label>
                    <textarea name="" placeholder='Hey .....' ></textarea>
                </div>
                <div className='postmodal_rightside_buttonwrapper'>
                    <button>Post</button>
                </div>
            </div>
        </div>
    )
};

export default PostUploadModal;
