import React from 'react';

import './_Messages.scss'

import post from '../../assets/persons/1.jpeg'


const Messages: React.FC = () => {
    return (
        <div className="messages">
            <div className="messages_profileimg">
                <img src={post} alt="" />
                <div className='messages_profileimg active'></div>
            </div>
            <div className="messages_body">
                <h5>Edem quist</h5>
                <p>hello how are you</p>
            </div>
        </div>
    )
};

export default Messages;
