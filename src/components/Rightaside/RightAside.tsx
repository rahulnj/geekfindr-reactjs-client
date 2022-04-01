import './_RightAside.scss'

import { Messages, Userinfo } from '..'

import { ProfileRightAsideProps } from '../../models'

import { useNavigate } from 'react-router-dom'



const RightAside = ({ profile, userProfile }: ProfileRightAsideProps): any => {


    const navigate = useNavigate()

    const HomeRightAside = () => {
        return (
            <div className='rightaside_wrapper_messages'>
                <div className="rightaside_wrapper_messages_heading">
                    <h4>Messages</h4>
                </div>
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
