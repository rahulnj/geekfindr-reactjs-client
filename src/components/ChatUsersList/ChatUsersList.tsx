import React, { useState } from 'react'

import './_ChatUsersList.scss'

import post from '../../assets/persons/1.jpeg'

import { BsPlusLg } from 'react-icons/bs'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from 'react-icons/bi';
import Modal from '../Modal/Modal';
import { HiUserGroup } from 'react-icons/hi';


const ChatUsersList = () => {
    const [isChatModal, setIsChatModal] = useState(false)

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
                        <input placeholder="Search Users..." type="text" />
                    </div>
                </div>
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
        </>
    )
}

export default ChatUsersList