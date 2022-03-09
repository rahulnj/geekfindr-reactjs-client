import React from 'react'
import './_ChatMessage.scss'

import post from '../../assets/persons/1.jpeg'
import { HiOutlineRefresh } from 'react-icons/hi'

const ChatHeader = ({ chatUser }: any) => {
    return (
        <div className='chatmessage_header'>
            <div className='chatmessage_header_wrapper'>
                <div className="chatmessage_header_profileimg">
                    <img src={chatUser?.reciever?.[0]?.avatar} alt="" />
                    {/* <div className='chatmessage_header_profileimg active'></div> */}
                </div>
                <div className='chatmessage_header_details'>
                    <h3>{chatUser?.reciever?.[0]?.username}</h3>
                </div>
            </div>
            <div className="chatmessage_header_icons">
                {/* <HiOutlineRefresh size={28} /> */}
            </div>
        </div>
    )
}

export default ChatHeader