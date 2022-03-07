import React from 'react'
import { ChatContent, ChatHeader } from '..'
import ChatFooter from './ChatFooter'

import './_ChatMessage.scss'



const ChatMessage = () => {
    return (
        <div className='chatmessage'>
            <ChatHeader />
            <ChatContent />
            <ChatFooter />
        </div>
    )
}

export default ChatMessage