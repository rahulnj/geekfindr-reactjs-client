import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';

import './_PostUploadModal.scss'
import 'react-image-crop/dist/ReactCrop.css';

import { BsUpload } from 'react-icons/bs'

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
        <div className={selectedImage ? 'postmodal' : 'postmodal_single'}>
            <div className='postmodal_leftside'>
                <div className="postmodal_leftside_wrapper">
                    <div className="postmodal_leftside_image">
                        {selectedImage && (
                            <ReactCrop onImageLoaded={setImage} src={selectedImage} crop={crop} onChange={setCrop} />
                        )}
                    </div>
                    <div className="postmodal_leftside_content">
                        <div className="postmodal_leftside_icon">
                            <BsUpload />
                        </div>
                        <div className="postmodal_leftside_text">
                            No file chosen, yet!
                        </div>
                    </div>
                    <div className="postmodal_leftside_filename">
                        File name here
                    </div>
                </div>
                <div className='postmodal_leftside_action'>
                    {
                        selectedImage ? <button className='postmodal_leftside_choose' onClick={getCroppedImg}>Crop</button>
                            : <button className='postmodal_leftside_choose'>Choose a file</button>
                    }
                    {!selectedImage && (<input type="file" onChange={HandlePostUpload} />)}
                </div>
            </div>
            <div className="postmodal_rightside">
                <div className="postmodal_rightside_wrapper">
                    <img src={croppedImage} alt="" />
                </div>
                <div>
                    <button className='postmodal_rightside_confirm'>confirm</button>
                </div>
            </div>
        </div >
    )
};

export default PostUploadModal;