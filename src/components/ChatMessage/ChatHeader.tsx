import React, { useState } from 'react'

import './_ChatMessage.scss'

import { HiUserGroup } from 'react-icons/hi'
import { ChatHeaderProps } from '../../models'
import Modal from '../Modal/Modal'

const ChatHeader: React.FC<ChatHeaderProps> = ({ chatUser }) => {
    const [isRoomModal, setIsRoomModal] = useState(false)
    return (
        <>
            <Modal isRoomModal={isRoomModal} setIsRoomModal={setIsRoomModal} chatUser={chatUser} />
            <div className='chatmessage_header'>
                <div className='chatmessage_header_wrapper'>
                    <div className="chatmessage_header_profileimg">
                        {
                            chatUser?.isRoom ? <HiUserGroup className="chatuserslist_header_icon" size={28} />
                                :
                                <img src={chatUser?.reciever?.[0]?.avatar} alt="" />
                        }
                    </div>
                    <div className='chatmessage_header_details'>
                        {
                            chatUser?.isRoom ? <h3>{chatUser?.roomName}</h3>
                                :
                                <h3>{chatUser?.reciever?.[0]?.username}</h3>
                        }
                    </div>
                </div>
                <div className="chatmessage_header_icons">
                    <button className="btnadd"
                        onClick={() => setIsRoomModal(true)}>
                        <span className="btntext">Add Members</span></button>
                </div>
            </div>
        </>
    )
}

export default ChatHeader;