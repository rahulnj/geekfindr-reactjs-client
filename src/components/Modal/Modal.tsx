import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import './_Modal.scss'


import { Messages, PostUploadModal } from '..';

const Modal = ({ isModalOpened, setIsModalOpened, isEditModalOpened, setIsEditModalOpened, followersModal, setFollowersModal }: any) => {

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

    if (!isModalOpened && !isEditModalOpened && !followersModal) {
        return null;
    }

    return createPortal(
        <>
            <div className="modal_overlay"></div>
            <div className={followersModal ? "modal-sm" : "modal-lg"}
                ref={Modalref}>
                {followersModal &&
                    <Messages followersModal={followersModal} />
                }
                {(isModalOpened || isEditModalOpened) && <PostUploadModal isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened}
                    isEditModalOpened={isEditModalOpened} setIsEditModalOpened={setIsEditModalOpened} />}
            </div>
        </>,
        document.getElementById('modal') as HTMLElement
    )
};

export default Modal;