import React from 'react'
import { ChatMessage, ChatUsersList } from '../../components'

import './_ChatScreen.scss'

const ChatScreen: React.FC = () => {
    return (
        <div className='chatscreen'>
            <ChatUsersList />
            <ChatMessage />
        </div>
    )
}

export default ChatScreen
