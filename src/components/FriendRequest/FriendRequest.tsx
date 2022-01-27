
import post from '../../assets/persons/1.jpeg'

import './_FriendRequest.scss'

const FriendRequest = () => {
    return (
        <div className='friendrequests'>
            <h4>Requests</h4>
            <div className="friendrequests_single">
                <div className="friendrequests_single_info">
                    <div className="friendrequests_single_info_photo">
                        <img src={post} alt="" />
                    </div>
                    <div className='friendrequests_single_info_name'>
                        <h5>Rahul</h5>
                    </div>
                </div>
                <div className='friendrequests_single_action'>
                    <button className='friendrequests_single_action_acceptbtn'>Accept</button>
                    <button className='friendrequests_single_action_declinebtn'>Decline</button>
                </div>
            </div>

        </div>
    )
};

export default FriendRequest;