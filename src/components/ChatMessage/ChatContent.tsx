import React, { useEffect, useState } from 'react'
import { ChatItem } from '..'
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { UserData } from '../../models';
import './_ChatMessage.scss'
const ChatContent = ({ socket, conversationId }: any) => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const { GetConversations } = useActions()
    const chatItems = [
        {
            key: 1,
            image:
                "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
            type: "",
            msg: "Hi Tim, How are you?",
        },
        {
            key: 2,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "I am fine.",
        },
        {
            key: 3,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "What about you?",
        },
        {
            key: 4,
            image:
                "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
            type: "",
            msg: "Awesome these days.",
        },
        {
            key: 5,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "Finally. What's the plan?",
        },
        {
            key: 6,
            image:
                "https://pbs.twimg.com/profile_images/1116431270697766912/-NfnQHvh_400x400.jpg",
            type: "",
            msg: "what plan mate?",
        },
        {
            key: 7,
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
            type: "other",
            msg: "I'm taliking about the tutorial",
        },
    ];
    const [messages, setMessages] = useState()
    let { data: conversations }: any = useTypedSelector(
        (state) => state.GetConversations
    );

    conversations?.map((msg: any) => {

    })

    let arrivalMsg = true;
    conversations = conversations?.map((chat: any) => {
        if (chat?.senderId !== CurrentUser?.id) {
            return { ...chat, arrivalMsg: true }
        } else {
            return { ...chat, arrivalMsg: false }
        }
    })





    console.log(conversations);

    useEffect(() => {
        if (conversationId) {
            GetConversations({
                token: CurrentUser?.token,
                conversationId
            })
        }
    }, [conversationId])

    useEffect(() => {
        if (socket.current) {
            socket.current.on("message", (msg: any) => {
                console.log(msg);
            })
        }
    }, [conversationId])






    return (
        <div className='chatcontent'>
            <div className='chatcontent_items'>
                {
                    chatItems.map((item) => (
                        <ChatItem
                            key={item.key}
                            type={item.type}
                            msg={item.msg}
                        />
                    ))
                }

            </div>
        </div>
    )
}

export default ChatContent