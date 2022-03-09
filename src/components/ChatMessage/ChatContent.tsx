import React, { useEffect, useState } from 'react'
import { ChatItem } from '..'
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { UserData } from '../../models';
import './_ChatMessage.scss'





const ChatContent = ({ socket, conversationId }: any) => {

    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    let { data: conversations, success: conversationsSuccess }: any = useTypedSelector(
        (state) => state.GetConversations
    );
    const [messageList, setMessageList] = useState<any>([])

    useEffect(() => {
        setMessageList(conversations)
    }, [conversationId, conversationsSuccess])

    console.log(messageList);



    useEffect(() => {
        if (socket.current) {
            socket.current.on("message", (msg: any) => {
                console.log(msg);
                const updatedMsg = { senderId: msg?.userId, message: msg?.message, updatedAt: msg?.time }
                setMessageList((message: any): any => [...message, updatedMsg])
            })
        }
    }, [])

    console.log(messageList);



    let updatedConversations: string[] = []
    updatedConversations = messageList?.map((chat: any) => {
        if (chat?.senderId !== CurrentUser?.id) {
            return { ...chat, arrivalMsg: true }
        } else {
            return { ...chat, arrivalMsg: false }
        }
    })
    console.log(updatedConversations);





    return (
        <div className='chatcontent'>
            <div className='chatcontent_items'>
                {
                    updatedConversations?.map((msg: any) => (
                        <ChatItem
                            key={msg?.id ? msg?.id : Math.random()}
                            arrivalMsg={msg?.arrivalMsg}
                            message={msg?.message}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default ChatContent