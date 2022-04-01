import React, { useState } from 'react'

import { FaPaperPlane } from 'react-icons/fa'

import './_ChatMessage.scss'
import { ChatFooterProps } from '../../models';



const ChatFooter: React.FC<ChatFooterProps> = ({ socket, conversationId }) => {

    const [message, setMessage] = useState('')

    const sendMessage = () => {
        if (message.length !== 0) {
            socket.current.emit("message", {
                message,
                conversationId
            })
            setMessage('')
        }
    }

    return (
        <div className="content__footer">
            <div className="sendNewMessage">
                <button className="addFiles">
                </button>
                <input
                    type="text"
                    placeholder="Type a message here"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    onKeyPress={(e) => { e.key === "Enter" && sendMessage() }}
                />
                <button className="btnSendMsg" id="sendMsgBtn"
                    onClick={sendMessage}
                >
                    <FaPaperPlane className='sendicon' size={24} />
                </button>
            </div>
        </div>
    )
}

export default ChatFooter