import React from 'react'
import './_ChatMessage.scss'

import post from '../../assets/persons/1.jpeg'
import { HiOutlineRefresh } from 'react-icons/hi'

const ChatHeader = () => {
    return (
        <div className='chatmessage_header'>
            <div className='chatmessage_header_wrapper'>
                <div className="chatmessage_header_profileimg">
                    <img src={post} alt="" />
                    <div className='chatmessage_header_profileimg active'></div>
                </div>
                <div className='chatmessage_header_details'>
                    <h3>Rahul</h3>
                </div>
            </div>
            <div className="chatmessage_header_icons">
                <HiOutlineRefresh size={28} />
            </div>
        </div>
    )
}

export default ChatHeader