import React from 'react'

import { io } from "socket.io-client";
import { BsPlusSquareFill } from 'react-icons/bs'
import { FaPaperPlane } from 'react-icons/fa'

import './_ChatMessage.scss'
import { UserData } from '../../models';



const ChatFooter = () => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);


    const socket = io(
        "http://www.geekfindr-dev-app.xyz/api/v1/chats/socket.io/", {
        transports: ["websocket"],
    });

    socket.on("connect", () => {
        console.log("connected");


    });



    return (
        <div className="content__footer">
            <div className="sendNewMessage">
                <button className="addFiles">
                    <BsPlusSquareFill className='sendicon' size={24} />
                </button>
                <input
                    type="text"
                    placeholder="Type a message here"
                />
                <button className="btnSendMsg" id="sendMsgBtn">
                    <FaPaperPlane className='sendicon' size={24} />
                </button>
            </div>
        </div>
    )
}

export default ChatFooter