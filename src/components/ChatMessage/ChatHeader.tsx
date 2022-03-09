import React from 'react'
import './_ChatMessage.scss'

import post from '../../assets/persons/1.jpeg'
import { HiOutlineRefresh, HiUserGroup } from 'react-icons/hi'
import { useState } from 'react'
import { useEffect } from 'react'

const ChatHeader = ({ chatUser }: any) => {


    return (
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
                {/* <HiOutlineRefresh size={28} /> */}
            </div>
        </div>
    )
}

export default ChatHeader