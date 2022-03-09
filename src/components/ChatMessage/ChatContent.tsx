import React, { useEffect, useRef, useState } from 'react'

import './_ChatMessage.scss'

import { ChatItem } from '..'

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { UserData } from '../../models';



const ChatContent = ({ socket, conversationId }: any) => {

    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    let { data: conversations, success: conversationsSuccess }: any = useTypedSelector(
        (state) => state.GetConversations
    );
    let { data: myChats }: any = useTypedSelector(
        (state) => state.GetMyChats
    );
    const [messageList, setMessageList] = useState<string[]>([])
    const scrollRef = useRef<HTMLDivElement>();

    useEffect(() => {
        setMessageList(conversations)
    }, [conversationId, conversationsSuccess])

    useEffect(() => {
        if (socket.current) {
            socket.current.on("message", (msg: any) => {
                console.log(msg);
                const updatedMsg = { senderId: msg?.userId, message: msg?.message, updatedAt: msg?.time }
                setMessageList((message: any): any => [...message, updatedMsg])
            })
        }
    }, [])

    let updatedConversations: string[] = []
    updatedConversations = messageList?.map((chat: any) => {
        if (chat?.senderId !== CurrentUser?.id) {
            return { ...chat, arrivalMsg: true }
        } else {
            return { ...chat, arrivalMsg: false }
        }
    })

    //     updatedConversations = updatedConversations?.map((conversation: any) => {
    //         conversation?.id ==
    // })


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