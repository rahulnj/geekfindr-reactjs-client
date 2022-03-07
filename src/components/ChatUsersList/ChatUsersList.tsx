import React from 'react'

import './_ChatUsersList.scss'

import post from '../../assets/persons/1.jpeg'

import { HiOutlineRefresh } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearch } from 'react-icons/bi';

const ChatUsersList = () => {


    return (
        <div className='chatuserslist'>
            <div className="chatuserslist_header">
                <img src={post} alt="" />
                <div className="chatuserslist_header_icons">
                    <HiOutlineRefresh size={28} />
                    <GiHamburgerMenu size={28} />
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
    )
}

export default ChatUsersList