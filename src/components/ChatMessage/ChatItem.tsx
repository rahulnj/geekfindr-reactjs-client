import React, { useState } from 'react'
import { useEffect } from 'react'
import Moment from 'react-moment'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { ChatItemProps, Conversation, GetMyChatsData, GetMyChatState, Participant, UserData } from '../../models'
import './_ChatMessage.scss'

const ChatItem = ({ scrollRef, conversationId, updatedConversations }: ChatItemProps): any => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const [currentChat, setCurrentChat] = useState<GetMyChatsData[]>([])
    let { data: myChats }: GetMyChatState = useTypedSelector(
        (state) => state.GetMyChats
    );

    useEffect(() => {
        if (conversationId) {
            let currentChat;
            currentChat = myChats?.filter((chat: GetMyChatsData) => (
                chat?.id === conversationId
            ))

            let reciever;
            currentChat = currentChat?.map((chat: GetMyChatsData) => {
                reciever = chat?.participants?.filter((participant: Participant) => participant?.id != CurrentUser?.id)
                return { ...chat, reciever }
            })
            setCurrentChat(currentChat)
        }
    }, [conversationId])

    return (
        updatedConversations?.map((conversation: Conversation) => (
            <div className={conversation?.arrivalMsg ? 'chatitem other' : 'chatitem'}
                key={Math.random()} ref={scrollRef}>
                <div className={conversation?.arrivalMsg ? 'chatitem_content' : 'chatitem_contentme'}>
                    <div className="chatitem_chatmsg">{conversation?.message}</div>
                    <div className="chatitem_chatmeta">
                        {
                            currentChat?.[0]?.participants?.map((participant: Participant) => {
                                if (participant?.id === conversation?.senderId && participant?.id !== CurrentUser?.id) {
                                    return (<span className="chatitem_chatmeta_name">{participant?.username}</span>)
                                }
                            })
                        }
                        <span className="chatitem_chatmeta_time"><Moment fromNow>
                            {conversation?.updatedAt}
                        </Moment></span>
                    </div>
                </div>
                {
                    currentChat?.[0]?.participants?.map((participant: Participant) => {
                        if (participant?.id === conversation?.senderId && participant?.id !== CurrentUser?.id) {
                            return (<img src={participant?.avatar} alt="" />)
                        }
                    })
                }
            </div>
        ))
    )
}

export default ChatItem