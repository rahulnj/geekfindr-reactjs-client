import React, { useEffect, useState } from 'react'
import { ChatContent, ChatHeader } from '..'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { UserData } from '../../models'
import ChatFooter from './ChatFooter'

import './_ChatMessage.scss'



const ChatMessage = ({ socket, conversationId, messageList, setMessageList }: any) => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const [chatUser, setChatUser] = useState<any>([])
    const { GetConversations } = useActions()
    let { data: myChats }: any = useTypedSelector(
        (state) => state.GetMyChats
    );

    useEffect(() => {
        if (conversationId) {
            myChats = myChats?.filter((chat: any) => (
                chat?.id === conversationId
            ))
            let updatedChatDetails: string[] = [];
            let reciever: {} = {}
            updatedChatDetails = myChats?.map((chat: any) => {
                reciever = chat?.participants?.filter((participant: any) => participant?.id != CurrentUser?.id)
                return { ...chat, reciever }
            })
            setChatUser(updatedChatDetails[0])
        }
    }, [conversationId])

    return (
        <div className='chatmessage'>
            {conversationId ?
                <>
                    <ChatHeader chatUser={chatUser} />
                    <ChatContent socket={socket} conversationId={conversationId}
                        messageList={messageList} setMessageList={setMessageList}
                    />
                    <ChatFooter socket={socket} messageList={messageList} setMessageList={setMessageList} />
                </>
                :
                <div className='nochat'>
                    <h3>loading</h3>
                </div>
            }
        </div>
    )
}

export default ChatMessage