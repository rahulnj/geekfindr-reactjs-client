import React, { useEffect, useRef, useState } from 'react'
import { io } from 'socket.io-client';
import { SocketOptions } from 'socket.io-client/build/esm/socket';
import { ChatMessage, ChatUsersList } from '../../components'
import { useActions } from '../../hooks/useActions';
import { UserData } from '../../models';

import './_ChatScreen.scss'

const ChatScreen: React.FC = () => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const socket = useRef<any>()
    const { GetConversations } = useActions()
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

        socket.current.on("disconnect", (reason: SocketOptions) => {
            console.log("disconnected", reason);
        });
    }, [])

    useEffect(() => {
        if (conversationId) {
            GetConversations({
                token: CurrentUser?.token,
                conversationId
            })
        }
    }, [conversationId])

    return (
        <div className='chatscreen'>
            <ChatUsersList socket={socket} setconversationId={setconversationId} />
            <ChatMessage socket={socket} conversationId={conversationId} />
        </div>
    )
}

export default ChatScreen;
