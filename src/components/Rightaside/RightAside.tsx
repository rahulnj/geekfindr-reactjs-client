import './_RightAside.scss'

import { FriendRequest, Messages, Userinfo } from '..'

import { ProfileProps, ProfileRightAsideProps } from '../../models'

import { BiEdit, BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'



const RightAside = ({ profile, userProfile }: ProfileRightAsideProps) => {
    const navigate = useNavigate()

    const HomeRightAside = () => {
        return (
            <div className='rightaside_wrapper_messages'>
                <div className="rightaside_wrapper_messages_heading">
                    <h4>Messages</h4>
                </div>
                {/* <div className="rightaside_wrapper_messages_search">
                    <BiSearch />
                    <input type="text" placeholder='Search Messages' />
                </div> */}
                <Messages />
                <Messages />
                <Messages />
                <div className="rightaside_wrapper_messages_heading_view">
                    <span
                        onClick={() => navigate('/chat')}
                    >
                        <h4>View Chats</h4>
                    </span>
                </div>
            </div>
        )
    }

    const ProfileRightAside = ({ userProfile }: ProfileRightAsideProps) => {
        return (
            <>
                <Userinfo userProfile={userProfile} />
            </>
        )
    }

    return (
        <div className={profile ? 'profilerightaside' : 'rightaside'}>
            <div className="rightaside_wrapper">
                {profile ? <ProfileRightAside userProfile={userProfile} /> : <HomeRightAside />}
            </div>
        </div>
    )
}

export default RightAside
