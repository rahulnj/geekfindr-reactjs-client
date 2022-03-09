import React from 'react'
import { ChatItemProps } from '../../models'
import './_ChatMessage.scss'

const ChatItem = ({ key, arrivalMsg, message }: ChatItemProps) => {
    return (
        <div className={arrivalMsg ? 'chatitem other' : 'chatitem'}
            key={key}>
            <div className={arrivalMsg ? 'chatitem_content' : 'chatitem_contentme'}>
                <div className="chatitem_chatmsg">{message}</div>
                <div className="chatitem_chatmeta">
                    <span>16 mins ago</span>
                    <span>Seen 1.03PM</span>
                </div>
            </div>
        </div>
    )
}

export default ChatItem