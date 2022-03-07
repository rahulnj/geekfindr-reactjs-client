import React from 'react'


import { BsPlusSquareFill } from 'react-icons/bs'
import { FaPaperPlane } from 'react-icons/fa'

import './_ChatMessage.scss'



const ChatFooter = () => {
    return (
        <div className="content__footer">
            <div className="sendNewMessage">
                <button className="addFiles">
                    <BsPlusSquareFill className='sendicon' size={24} />
                </button>
                <input
                    type="text"
                    placeholder="Type a message here"
                />
                <button className="btnSendMsg" id="sendMsgBtn">
                    <FaPaperPlane className='sendicon' size={24} />
                </button>
            </div>
        </div>
    )
}

export default ChatFooter