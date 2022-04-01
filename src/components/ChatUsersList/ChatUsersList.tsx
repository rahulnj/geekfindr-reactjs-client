import React, { useEffect, useState } from 'react'
import Moment from 'react-moment';

import './_ChatUsersList.scss'

import { BsPlusLg } from 'react-icons/bs'
import { BiSearch } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr';

import Modal from '../Modal/Modal';

import { HiUserGroup } from 'react-icons/hi';
import {
    ChatUsersListProps,
    conversationObj,
    CreateConversationOrRoomState,
    GetMyChatsData, GetMyChatState,
    Participant,
    SearchedUserData,
    UserData
} from '../../models';

import { useSearch } from '../../hooks/useSearch';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';



const ChatUsersList: React.FC<ChatUsersListProps> = ({ socket, setconversationId }) => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);

    const { CreateConversationOrRoom, GetMyChats } = useActions();
    const [isChatModal, setIsChatModal] = useState(false)


    const { filteredData, setFilteredData, setWordEntered } = useSearch();

    let { success: CreateChatSuccess }: CreateConversationOrRoomState = useTypedSelector(
        (state) => state.CreateConversationOrRoom
    );
    let { data: myChats }: GetMyChatState = useTypedSelector(
        (state) => state.GetMyChats
    );



    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    useEffect(() => {
        GetMyChats({
            token: CurrentUser?.token
        })
    }, [CreateChatSuccess])


    const createUserConversation = (id: string) => {
        const conversationObj: conversationObj = {
            isRoom: false,
            roomName: '',
            participants: [id]
        }


        CreateConversationOrRoom({
            token: CurrentUser?.token,
            conversationObj
        })

    }

    let reciever = []
    let updatedChatList = myChats?.map((chat: GetMyChatsData) => {
        reciever = chat?.participants?.filter((participant: Participant) => participant?.id !== CurrentUser?.id)
        return { ...chat, reciever }
    })

    const joinConversation = (id: string) => {
        if (socket.current) {
            socket.current.emit("join_conversation", {
                conversationId: id
            })
            setconversationId(id)
        }
    }

    return (
        <>
            <Modal isChatModal={isChatModal} setIsChatModal={setIsChatModal} />
            <div className='chatuserslist'>
                <div className="chatuserslist_header">
                    <div className="chatuserslist_header_icons">
                        <button className="btnadd" role="button" onClick={() => setIsChatModal(true)}>
                            <span className="btntext">Create Room</span></button>
                    </div>
                </div>
                <div className='chatuserslist_searchbox'>
                    <div className='chatuserslist_searchbox_wrapper'>
                        <BiSearch />
                        <input placeholder="Search Users..." type="text"
                            onChange={(e) => setWordEntered(e.target.value)} />
                        {filteredData.length !== 0 && < GrFormClose className='chatuserslist_searchbox_closeicon'
                            size={26} opacity={0.5} onClick={clearInput} />}
                    </div>
                </div>
                <div className="chatuserslist_users">
                    {filteredData?.map((user: SearchedUserData) => (
                        <div className="chatuserslist_singleusers" key={user?.id}>
                            <div className="chatuserslist_singleusers_profileimg">
                                <img src={user?.avatar} alt="" />
                            </div>
                            <div className='chatuserslist_singleusers_details'>
                                <div>
                                    <h5>{user?.username}</h5>
                                    <p>{user?.role}</p>
                                </div>
                                <BsPlusLg size={18}
                                    onClick={() => createUserConversation(user?.id)}
                                />
                            </div>
                        </div>
                    ))
                    }
                    <hr />
                    <div className='chatuserslist_singleusers_title'>
                        <h4>Rooms</h4>
                    </div>
                    {updatedChatList?.reverse().map((chat) => (
                        <div className="chatuserslist_singleusers"
                            key={chat?.id}
                            onClick={() => joinConversation(chat?.id)}>
                            <div className="chatuserslist_singleusers_profileimg">
                                {chat?.isRoom ? <HiUserGroup className="chatuserslist_header_icon" size={28} />
                                    : <img src={chat?.reciever?.[0]?.avatar} alt="" />}
                            </div>
                            <div className='chatuserslist_singleusers_details'>
                                <div>
                                    <h5>{chat?.isRoom ? chat?.roomName : chat?.reciever?.[0]?.username}</h5>
                                    <p>{chat?.isRoom ? chat?.reciever?.length : ''} members</p>
                                </div>
                                <span><Moment fromNow>{chat?.updatedAt}</Moment></span>
                            </div>
                        </div>
                    ))
                    }



                </div>
            </div>
        </>
    )
}

export default ChatUsersList