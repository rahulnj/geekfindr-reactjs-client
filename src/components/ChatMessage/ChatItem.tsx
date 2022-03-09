import React from 'react'
import Moment from 'react-moment'
import { ChatItemProps } from '../../models'
import './_ChatMessage.scss'

const ChatItem = ({ key, arrivalMsg, message, scrollRef, updatedAt }: ChatItemProps) => {

    return (
        <div className={arrivalMsg ? 'chatitem other' : 'chatitem'}
            key={key} ref={scrollRef}>
            <div className={arrivalMsg ? 'chatitem_content' : 'chatitem_contentme'}>
                <div className="chatitem_chatmsg">{message}</div>
                <div className="chatitem_chatmeta">
                    {/* <span>16 mins ago</span> */}
                    <span><Moment fromNow>{updatedAt}</Moment></span>
                </div>
            </div>
        </div>
    )
}

export default ChatItem