import './_RightAside.scss'

import { FriendRequest, Messages, Userinfo } from '..'

import { Profile } from '../../models'

import { BiEdit, BiSearch } from 'react-icons/bi'



const RightAside: React.FC<Profile> = ({ profile }) => {

    const HomeRightAside = () => {
        return (
            <div className='rightaside_wrapper_messages'>
                <div className="rightaside_wrapper_messages_heading">
                    <h4>Messages</h4><BiEdit size={21} />
                </div>
                <div className="rightaside_wrapper_messages_search">
                    <BiSearch />
                    <input type="text" placeholder='Search Messages' />
                </div>
                <Messages />
                <Messages />
                <Messages />
                <FriendRequest />
            </div>
        )
    }

    const ProfileRightAside = () => {
        return (
            <>
                <Userinfo />
            </>
        )
    }

    return (
        <div className={profile ? 'profilerightaside' : 'rightaside'}>
            <div className="rightaside_wrapper">
                {profile ? <ProfileRightAside /> : <HomeRightAside />}
            </div>
        </div>
    )
}

export default RightAside
