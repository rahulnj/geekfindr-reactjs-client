import React from 'react'
import { ChatItemProps } from '../../models'
import './_ChatMessage.scss'

const ChatItem = ({ key, msg, type }: ChatItemProps) => {
    return (
        <div className={type === 'other' ? 'chatitem other' : 'chatitem'}
            key={key}>
            <div className={type === 'other' ? 'chatitem_content' : 'chatitem_contentme'}>
                <div className="chatitem_chatmsg">{msg}</div>
                <div className="chatitem_chatmeta">
                    <span>16 mins ago</span>
                    <span>Seen 1.03PM</span>
                </div>
            </div>
        </div>
    )
}

export default ChatItem