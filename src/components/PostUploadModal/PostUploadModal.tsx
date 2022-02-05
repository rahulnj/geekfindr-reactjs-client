import React, { useState } from 'react';
import ReactCrop from 'react-image-crop';

import './_PostUploadModal.scss'
import 'react-image-crop/dist/ReactCrop.css';

import { BsUpload } from 'react-icons/bs'

import { AddPostModalState } from '../../models';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import axios from 'axios';
import request from '../../api';



const PostUploadModal = ({ isModalOpened, setIsModalOpened }: AddPostModalState) => {
    const [selectedImage, SetSelectedImage] = useState<any>(null)
    const [image, setImage] = useState<any>(null)
    const [crop, setCrop] = useState<any>({ aspect: 1 / 1 })
    const [croppedImage, setCroppedImage] = useState<any>(null);
    const [imageConfirm, setImageConfirm] = useState(false);

    const [testImage, setTestImage] = useState(null)
    const uploadFileForPost = (e: any) => {
        const file = e.target.files[0]
        setTestImage(file)
        SetSelectedImage(URL.createObjectURL(file))
    }


    const { user }: any = useTypedSelector(
        (state) => state.UserSignin
    )

    const uploadPost = async (e: any) => {
        e.preventDefault()
        try {
            const uploadconfig = await request.get('/api/v1/uploads/signed-url', {
                params: {
                    fileType: "image",
                    fileSubType: "jpeg"
                },
                headers: {
                    'Authorization': `Bearer ${user.token}`,
                }
            })
            console.log(uploadconfig);
            console.log(testImage);

            await axios.put(uploadconfig.data.url, testImage, {
                headers: {
                    'Content-Type': 'image/jpeg'
                }
            })
        } catch (error) {
            console.log(error);

        }


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

    const confirmFinalImage = () => {
        if (croppedImage) {
            setImageConfirm(true)
        }
        return;
    }

    const cancelThePost = () => {
        setIsModalOpened(false)
    }


    return (
        <div className={selectedImage ? 'postmodal' : 'postmodal_single'}>
            <div className='postmodal_leftside'>
                <div className="postmodal_leftside_wrapper">
                    <div className="postmodal_leftside_image">
                        {selectedImage && !imageConfirm && (
                            <ReactCrop onImageLoaded={setImage} src={selectedImage} crop={crop} onChange={setCrop} />
                        )}
                        {
                            imageConfirm && (
                                <img src={croppedImage} alt="" />
                            )
                        }
                    </div>
                    {!selectedImage && (<div className="postmodal_leftside_content">
                        <div className="postmodal_leftside_icon">
                            <BsUpload />
                        </div>
                        <div className="postmodal_leftside_text">
                            No file chosen, yet!
                        </div>
                    </div>)}
                </div>
                <div className='postmodal_leftside_action'>
                    {
                        selectedImage && !imageConfirm && (<button className='postmodal_leftside_choose' onClick={getCroppedImg}>Crop</button>)
                    }
                    {!selectedImage &&
                        (<button className='postmodal_leftside_choose'>Choose a file</button>
                        )}
                    {!selectedImage &&
                        (<input type="file" onChange={uploadFileForPost} />
                        )}
                </div>
            </div>
            {selectedImage && !imageConfirm && (
                <div className="postmodal_rightside">
                    <div className="postmodal_rightside_wrapper">
                        <img src={croppedImage} alt="" />
                    </div>
                    <div>
                        <button className='postmodal_rightside_confirm' onClick={confirmFinalImage}>confirm</button>
                    </div>
                </div>
            )}
            {imageConfirm && (<div className="postmodal_descriptionarea">
                <div className='postmodal_descriptionarea_wrapper'>
                    <label htmlFor="">Caption</label>
                    <textarea className='postmodal_descriptionarea_textarea' placeholder='Type Something'></textarea>
                    <div className="postmodal_descriptionarea_actions">
                        <button className="postmodal_descriptionarea_actions_cancel" onClick={cancelThePost}>Cancel</button>
                        <button className="postmodal_descriptionarea_actions_post" onClick={uploadPost}>Post</button>
                    </div>
                </div>
            </div>
            )
            }
        </div >
    )
};

export default PostUploadModal;