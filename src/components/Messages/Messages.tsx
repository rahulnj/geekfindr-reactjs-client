import React from 'react';

import './_Messages.scss'

import post from '../../assets/persons/1.jpeg'
import { FollowersModal } from '../../models';
import { useNavigate } from 'react-router-dom';


const Messages: React.FC<FollowersModal> = ({ followersModal, followingModal, username, role, userId, avatar }) => {

    const navigate = useNavigate();


    const ProfileFollowers = () => {

        return (
            <div className="messages_followers">
                <div className="messages_profileimg">
                    <img src={avatar} alt="" />
                </div>
                <div className="messages_bodywrapperfollowers">
                    <div className="messages_body">
                        <h5>{username}</h5>
                        <p>{role}</p>
                    </div>
                    {/* {followersModal && <button className='messages_accbtn'>Follow</button>} */}
                </div>
            </div >
        )
    }



    const HomeMessages = () => {

        return (
            <div className="messages">
                <div className="messages_profileimg">
                    <img src={post} alt="" />
                    <div className='messages_profileimg active'></div>
                </div>
                <div className="messages_bodywrapper">
                    <div className="messages_body">
                        <h5>Edem quist</h5>
                        <p>hello how are you</p>
                    </div>
                </div>
            </div >
        )
    }

    return (
        <>
            {(followersModal || followingModal) ? <ProfileFollowers /> : <HomeMessages />}
        </>
    )









}
export default Messages;
