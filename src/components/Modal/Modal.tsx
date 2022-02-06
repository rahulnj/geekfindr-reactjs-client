import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import './_Modal.scss'

import { AddPostModalState } from '../../models';
import { PostUploadModal } from '..';

const Modal = ({ isModalOpened, setIsModalOpened }: AddPostModalState) => {

    const Modalref = useRef<any>()

    useEffect(() => {
        const checkIfClickedOutsideModal = (e: MouseEvent) => {
            if (isModalOpened && Modalref.current && !Modalref.current.contains(e.target)) {
                setIsModalOpened(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutsideModal)
        return () => {
            document.addEventListener("mousedown", checkIfClickedOutsideModal)
        };
    }, [isModalOpened, setIsModalOpened]);

    if (!isModalOpened) {
        return null;
    }

    return createPortal(
        <>
            <div className="modal_overlay"></div>
            <div className="modal" ref={Modalref}>
                <PostUploadModal isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened} />
            </div>
        </>,
        document.getElementById('modal') as HTMLElement
    )
};

export default Modal;