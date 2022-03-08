import React, { useState } from 'react'

// import { io } from "socket.io-client";
import { BsPlusSquareFill } from 'react-icons/bs'
import { FaPaperPlane } from 'react-icons/fa'

import './_ChatMessage.scss'
import { UserData } from '../../models';



const ChatFooter = ({ socket }: any) => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const [message, setMessage] = useState('')





    const sendMessage = () => {
        console.log("send");
        socket.current.emit("message", {
            message
        })
    }


    return (
        <div className="content__footer">
            <div className="sendNewMessage">
                <button className="addFiles">
                    <BsPlusSquareFill className='sendicon' size={24} />
                </button>
                <input
                    type="text"
                    placeholder="Type a message here"
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button className="btnSendMsg" id="sendMsgBtn"
                    onClick={sendMessage}
                >
                    <FaPaperPlane className='sendicon' size={24} />
                </button>
            </div>
        </div>
    )
}

export default ChatFooter