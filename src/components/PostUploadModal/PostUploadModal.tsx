import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';

import './_PostUploadModal.scss'
import 'react-image-crop/dist/ReactCrop.css';

import { AddPostModalState } from '../../models';



const PostUploadModal = ({ isModalOpened, setIsModalOpened }: AddPostModalState) => {
    const [selectedImage, SetSelectedImage] = useState<any>(null)
    const [image, setImage] = useState<any>(null)
    const [crop, setCrop] = useState<any>({ aspect: 1 / 1 })
    const [croppedImage, setCroppedImage] = useState<any>(null);

    const HandlePostUpload = (e: any) => {
        const file = e.target.files[0]
        SetSelectedImage(URL.createObjectURL(file))
    }

    function getCroppedImg() {
        const canvas = document.createElement("canvas");
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx: any = canvas.getContext("2d");

        // New lines to be added
        const pixelRatio = window.devicePixelRatio;
        canvas.width = crop.width * pixelRatio;
        canvas.height = crop.height * pixelRatio;
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
        ctx.imageSmoothingQuality = "high";

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        const base64Image = canvas.toDataURL("image/jpeg");
        setCroppedImage(base64Image)
    }

    return (
        <div className={croppedImage ? 'postmodal' : 'postmodal_none'}>
            <div className='postmodal_leftside'>
                <h3>Create new post</h3>
                <input type="file" onChange={HandlePostUpload} />
                {selectedImage && (
                    <ReactCrop onImageLoaded={setImage} src={selectedImage} crop={crop} onChange={setCrop} />
                )}
                {croppedImage && (<img src={croppedImage} alt="" />)}
                <button onClick={getCroppedImg}>Crop</button>
            </div>
            <div className={croppedImage ? 'postmodal_rightside' : 'postmodal_none_rightside'}>
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
