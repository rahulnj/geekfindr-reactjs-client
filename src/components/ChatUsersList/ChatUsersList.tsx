import React, { useState } from 'react'

import './_ChatUsersList.scss'

import post from '../../assets/persons/1.jpeg'

import { BsPlusLg } from 'react-icons/bs'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from 'react-icons/bi';
import Modal from '../Modal/Modal';
import { HiUserGroup } from 'react-icons/hi';
import { useSearch } from '../../hooks/useSearch';
import { SearchedUserData } from '../../models';
import { GrFormClose } from 'react-icons/gr';


const ChatUsersList = () => {
    const [isChatModal, setIsChatModal] = useState(false)
    const { filteredData, setFilteredData, setWordEntered, wordEntered } = useSearch()
    console.log(filteredData);
    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };
    return (
        <>
            <Modal isChatModal={isChatModal} setIsChatModal={setIsChatModal} />
            <div className='chatuserslist'>
                <div className="chatuserslist_header">
                    <img src={post} alt="" />
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
                        <div className="chatuserslist_singleusers">
                            <div className="chatuserslist_singleusers_profileimg">
                                <img src={user?.avatar} alt="" />
                            </div>
                            <div className='chatuserslist_singleusers_details'>
                                <div>
                                    <h5>{user?.username}</h5>
                                    <p>{user?.role}</p>
                                </div>
                                <BsPlusLg size={18} />
                            </div>
                        </div>
                    ))
                    }
                    <hr />
                    <div className="chatuserslist_singleusers">
                        <div className="chatuserslist_singleusers_profileimg">
                            <img src={post} alt="" />
                            <div className='chatuserslist_singleusers_profileimg active'></div>
                        </div>
                        <div className='chatuserslist_singleusers_details'>
                            <div>
                                <h6>Robo Cop</h6>
                                <p >Hey, you're arrested!</p>
                            </div>
                            <span>13:21</span>
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    )
}

export default ChatUsersList