import React, { useEffect, useState } from 'react'

import './_ChatUsersList.scss'

import post from '../../assets/persons/1.jpeg'

import { BsPlusLg } from 'react-icons/bs'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from 'react-icons/bi';
import Modal from '../Modal/Modal';
import { HiUserGroup } from 'react-icons/hi';
import { useSearch } from '../../hooks/useSearch';
import { SearchedUserData, UserData } from '../../models';
import { GrFormClose } from 'react-icons/gr';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Moment from 'react-moment';


const ChatUsersList = ({ socket, setconversationId }: any) => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);

    const { CreateConversationOrRoom, GetMyChats } = useActions();
    const [isChatModal, setIsChatModal] = useState(false)


    const { filteredData, setFilteredData, setWordEntered, wordEntered } = useSearch();

    let { success: CreateChatSuccess }: any = useTypedSelector(
        (state) => state.CreateConversationOrRoom
    );
    let { data: myChats }: any = useTypedSelector(
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
        const conversationObj = {
            isRoom: false,
            roomName: '',
            participants: [id]
        }


        CreateConversationOrRoom({
            token: CurrentUser?.token,
            conversationObj
        })

    }

    let reciever: {} = {}
    let updatedChatList: string[] = []
    updatedChatList = myChats?.map((chat: any) => {
        reciever = chat?.participants?.filter((participant: any) => participant?.id != CurrentUser?.id)
        return { ...chat, reciever }
    })

    const joinConversation = (id: string) => {
        setconversationId(id)

        socket.current.emit("join_conversation", {
            conversationId: id
        })
    }

    return (
        <>
            <Modal isChatModal={isChatModal} setIsChatModal={setIsChatModal} />
            <div className='chatuserslist'>
                <div className="chatuserslist_header">
                    <img src={CurrentUser?.avatar} alt="" />
                    <div className="chatuserslist_header_icons">
                        <HiUserGroup className="chatuserslist_header_icon" size={28}
                            onClick={() => setIsChatModal(true)}
                        />
                        <GiHamburgerMenu className="chatuserslist_header_icon" size={28} />
                    </div>
                </div>
                <div className='chatuserslist_searchbox'>
                    <div className='chatuserslist_searchbox_wrapper'>
                        <BiSearch />
                        <input placeholder="Search Users..." type="text"
                            onChange={(e) => setWordEntered(e.target.value)} />
                        {filteredData.length != 0 && < GrFormClose className='chatuserslist_searchbox_closeicon'
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
                    {updatedChatList.map((chat: any) => {
                        if (chat?.isRoom) {
                            return (<div className="chatuserslist_singleusers"
                                key={chat?.id}
                            >
                                <div className="chatuserslist_singleusers_profileimg">
                                    <img src={chat?.reciever[0]?.avatar} alt="" />
                                    {/* <div className='chatuserslist_singleusers_profileimg active'></div> */}
                                </div>
                                <div className='chatuserslist_singleusers_details'>
                                    <div>
                                        <h5>{chat?.roomName}</h5>
                                        <p>{chat?.reciever?.length} members</p>
                                    </div>
                                    <span><Moment fromNow>{chat?.updatedAt}</Moment></span>
                                </div>
                            </div>)
                        } else {
                            return (<div className="chatuserslist_singleusers"
                                onClick={() => joinConversation(chat?.id)}
                                key={chat?.id}
                            >
                                <div className="chatuserslist_singleusers_profileimg">
                                    <img src={chat?.reciever[0]?.avatar} alt="" />
                                    {/* <div className='chatuserslist_singleusers_profileimg active'></div> */}
                                </div>
                                <div className='chatuserslist_singleusers_details'>
                                    <div>
                                        <h5>{chat?.reciever[0]?.username}</h5>
                                        <p >Hey, you're arrested!</p>
                                    </div>
                                    <span><Moment fromNow>{chat?.updatedAt}</Moment></span>
                                </div>
                            </div>)
                        }
                    })


                    }
                    <hr />
                </div>
            </div>
        </>
    )
}

export default ChatUsersList