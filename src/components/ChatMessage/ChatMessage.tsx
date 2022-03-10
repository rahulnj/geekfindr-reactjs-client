import React, { useEffect, useState } from 'react'

import './_ChatMessage.scss'

import {
    ChatContent,
    ChatHeader,
    ChatFooter
} from '..'

import { useTypedSelector } from '../../hooks/useTypedSelector'

import {
    ChatMessageProps,
    GetMyChatsData,
    GetMyChatState,
    Participant,
    UserData
} from '../../models'


const ChatMessage: React.FC<ChatMessageProps> = ({ socket, conversationId }) => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const [chatUser, setChatUser] = useState<GetMyChatsData>()
    let { data: myChats, error: myChatsError, loading: myChatsLoading }: GetMyChatState = useTypedSelector(
        (state) => state.GetMyChats
    );

    useEffect(() => {
        if (conversationId) {
            myChats = myChats?.filter((chat: GetMyChatsData) => (
                chat?.id === conversationId
            ))
            let updatedChatDetails;
            let reciever;
            updatedChatDetails = myChats?.map((chat: GetMyChatsData) => {
                reciever = chat?.participants?.filter((participant: Participant) => participant?.id != CurrentUser?.id)
                return { ...chat, reciever }
            })
            console.log(updatedChatDetails?.[0]);

            setChatUser(updatedChatDetails?.[0])
        }
    }, [conversationId])

    return (
        <div className='chatmessage'>
            {conversationId ?
                <>
                    <ChatHeader chatUser={chatUser} />
                    <ChatContent socket={socket} conversationId={conversationId} />
                    <ChatFooter socket={socket} />
                </>
                :
                <div className='nochat'>
                    <h3>loading</h3>
                </div>
            }
        </div>
    )
}

export default ChatMessage;