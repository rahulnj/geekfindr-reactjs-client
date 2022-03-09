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

    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messageList]);

    console.log(updatedConversations);


    return (
        <div className='chatcontent'>
            <div className='chatcontent_items'>
                {
                    updatedConversations?.map((msg: any) => (
                        <ChatItem
                            scrollRef={scrollRef}
                            key={msg?.id ? msg?.id : Math.random()}
                            arrivalMsg={msg?.arrivalMsg}
                            message={msg?.message}
                            updatedAt={msg?.updatedAt}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default ChatContent