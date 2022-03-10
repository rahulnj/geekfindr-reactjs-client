import React, { useEffect, useRef, useState } from 'react'

import './_ChatMessage.scss'

import { ChatItem } from '..'

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { ChatMessageProps, Conversation, GetConversationsState, GetMyChatState, SocketResponseMessage, UserData } from '../../models';



const ChatContent: React.FC<ChatMessageProps> = ({ socket, conversationId }) => {

    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    let { data: conversations, success: conversationsSuccess }: GetConversationsState = useTypedSelector(
        (state) => state.GetConversations
    );
    let { data: myChats }: GetMyChatState = useTypedSelector(
        (state) => state.GetMyChats
    );
    const [messageList, setMessageList] = useState<Conversation[]>([])
    const scrollRef = useRef<HTMLDivElement>();

    useEffect(() => {
        setMessageList(conversations)
    }, [conversationId, conversationsSuccess])

    useEffect(() => {
        if (socket.current) {
            socket.current.on("message", (msg: SocketResponseMessage) => {
                const updatedMsg = { senderId: msg?.userId, message: msg?.message, updatedAt: msg?.time }
                setMessageList((message): Conversation[] => [...message, updatedMsg])
            })
        }
    }, [])

    let updatedConversations;
    updatedConversations = messageList?.map((chat: Conversation) => {
        if (chat?.senderId !== CurrentUser?.id) {
            return { ...chat, arrivalMsg: true }
        } else {
            return { ...chat, arrivalMsg: false }
        }
    })

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messageList]);

    return (
        <div className='chatcontent'>
            <div className='chatcontent_items'>
                <ChatItem
                    scrollRef={scrollRef}
                    updatedConversations={updatedConversations}
                    conversationId={conversationId}
                />
            </div>
        </div>
    )
}

export default ChatContent