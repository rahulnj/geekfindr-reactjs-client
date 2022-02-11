import React from 'react';

import './_Messages.scss'

import post from '../../assets/persons/1.jpeg'
import { FollowersModal } from '../../models';


const Messages: React.FC<FollowersModal> = ({ followersModal }) => {
    return (
        <div className="messages">
            <div className="messages_profileimg">
                <img src={post} alt="" />
                {!followersModal && <div className='messages_profileimg active'></div>}
            </div>
            <div className={followersModal ? "messages_bodywrapper" : ''}>
                <div className="messages_body">
                    <h5>Edem quist</h5>
                    <p>hello how are you</p>
                </div>
                {followersModal && <button className='messages_accbtn'>Follow</button>}
            </div>
        </div >
    )
};

export default Messages;
