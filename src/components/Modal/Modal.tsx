import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import './_Modal.scss'

import { Comment, Messages, PostUploadModal, ProjectDescriptionModal } from '..';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { UserData } from '../../models';
import ProjectTaskModal from '../ProjectTaskModal/ProjectTaskModal';

const Modal = ({ isModalOpened, setIsModalOpened,
    isEditModalOpened, setIsEditModalOpened,
    followersModal, setFollowersModal,
    followingModal, setFollowingModal,
    isCommentModalOpened, setIsCommentModalOpened,
    commentPostId, commentPostImg, isProjectDescriptionModal,
    setIsProjectDescriptionModal, setProjectDescriptionLoading,
    isProjectTaskModal, setIsProjectTaskModal
}: any) => {

    const Modalref = useRef<any>()

    const { data: Followers }: any = useTypedSelector(
        (state) => state.GetUserFollowers
    )
    const { data: Followings }: any = useTypedSelector(
        (state) => state.GetFollowingUsers
    )

    let MODAL: boolean;

    if (isModalOpened) {
        MODAL = isModalOpened
    } else if (isEditModalOpened) {
        MODAL = isEditModalOpened
    } else if (followersModal) {
        MODAL = followersModal
    } else if (followingModal) {
        MODAL = followingModal
    } else if (isCommentModalOpened) {
        MODAL = isCommentModalOpened
    } else if (isProjectDescriptionModal) {
        MODAL = isProjectDescriptionModal
    } else if (isProjectTaskModal) {
        MODAL = isProjectTaskModal
    }



    useEffect(() => {
        const checkIfClickedOutsideModal = (e: MouseEvent) => {
            if (MODAL && Modalref.current && !Modalref.current.contains(e.target)) {
                if (isModalOpened) {
                    setIsModalOpened(false)
                } else if (isEditModalOpened) {
                    setIsEditModalOpened(false)
                } else if (followersModal) {
                    setFollowersModal(false)
                } else if (followingModal) {
                    setFollowingModal(false)
                } else if (isCommentModalOpened) {
                    setIsCommentModalOpened(false)
                } else if (isProjectDescriptionModal) {
                    setIsProjectDescriptionModal(false)
                } else if (isProjectTaskModal) {
                    setIsProjectTaskModal(false)
                }
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutsideModal)
        return () => {
            document.addEventListener("mousedown", checkIfClickedOutsideModal)
        };
    }, [isModalOpened, setIsModalOpened,
        isEditModalOpened, setIsEditModalOpened,
        followersModal, setFollowersModal,
        followingModal, setFollowingModal,
        isCommentModalOpened, setIsCommentModalOpened,
        isProjectDescriptionModal, setIsProjectDescriptionModal,
        isProjectTaskModal, setIsProjectTaskModal]);

    if (!isModalOpened &&
        !isEditModalOpened &&
        !followersModal &&
        !followingModal &&
        !isCommentModalOpened &&
        !isProjectDescriptionModal &&
        !isProjectTaskModal
    ) {
        return null;
    }

    return createPortal(
        <>
            <div className="modal_overlay"></div>
            <div className={(followersModal || followingModal) ? "modal-sm" : "modal-lg"}
                ref={Modalref}>
                {followersModal &&
                    Followers.map((user: UserData) => (
                        <Messages followersModal={followersModal}
                            key={user.id}
                            username={user.username}
                            role={user.role}
                            userId={user.id}
                            avatar={user.avatar}
                        />
                    ))
                }
                {followingModal &&
                    Followings.map((user: UserData) => (
                        <Messages followingModal={followingModal}
                            key={user.id}
                            username={user.username}
                            role={user.role}
                            userId={user.id}
                            avatar={user.avatar}
                        />
                    ))
                }
                {(isModalOpened || isEditModalOpened) && <PostUploadModal isModalOpened={isModalOpened} setIsModalOpened={setIsModalOpened}
                    isEditModalOpened={isEditModalOpened} setIsEditModalOpened={setIsEditModalOpened} />}
                {isCommentModalOpened && <Comment commentPostId={commentPostId} commentPostImg={commentPostImg} />}
                {isProjectDescriptionModal && <ProjectDescriptionModal setIsProjectDescriptionModal={setIsProjectDescriptionModal} />}
                {isProjectTaskModal && <ProjectTaskModal setIsProjectTaskModal={setIsProjectTaskModal} />}
            </div>
        </>,
        document.getElementById('modal') as HTMLElement
    )
};

export default Modal;