import React, { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client';
import { ChatMessage, ChatUsersList } from '../../components'
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { UserData } from '../../models';

import './_ChatScreen.scss'

const ChatScreen: React.FC = () => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const socket = useRef<any>()
    const [conversationId, setconversationId] = useState('')

    useEffect(() => {
        socket.current = io(
            "http://www.geekfindr-dev-app.xyz", {
            path: '/api/v1/chats/socket.io',
            transports: ["websocket"],
            auth: { token: CurrentUser?.token }
        });


        socket.current.on("connect", () => {
            console.log("connected");
            console.log(socket.current.id);

        });
        socket.current.on("connect_error", () => {
            console.log("error", socket.current)
            setTimeout(() => {
                socket.current.connect();
            }, 5000);
        });

        socket.current.on("disconnect", (reason: any) => {
            console.log("disconnected", reason);
        });

    }, [])

    const { GetConversations } = useActions()
    let { data: conversations, success: conversationsSuccess, loading: conversationsLoading }: any = useTypedSelector(
        (state) => state.GetConversations
    );
    useEffect(() => {
        if (conversationId) {
            GetConversations({
                token: CurrentUser?.token,
                conversationId
            })
            // setMessageList(conversations)
        }
    }, [conversationId])

    console.log(conversations);


    return (
        <div className='chatscreen'>
            <ChatUsersList socket={socket} setconversationId={setconversationId} />
            <ChatMessage socket={socket} conversationId={conversationId}
            />
        </div>
    )
}

export default ChatScreen
