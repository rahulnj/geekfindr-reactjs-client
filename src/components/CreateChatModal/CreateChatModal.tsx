import React, { useState } from 'react'

import './_CreateChatModal.scss'
import Multiselect from 'multiselect-react-dropdown';
const CreateChatModal = () => {

    const [isRoom, setIsRoom] = useState(false)
    const [selectedUsers, setSelectedUsers] = useState([])


    const options: any = [{ username: 'rahul' }, { username: 'sooraj' }, { username: 'anyone' }]

    return (
        <div className="createchat">
            <div className="createchat_wrapper">
                <h3>Create Room</h3>
                <div className='createchat_inputs'>
                    <label className='createchat_inputs_label'>Room Name</label>
                    <input className='createchat_inputs_input' type="text"
                    />
                </div>
                <div className='createchat_inputs'>
                    <label className='createchat_inputs_label'>Members</label>
                    <Multiselect
                        onSelect={(event) => setSelectedUsers(event)}
                        onRemove={(event) => setSelectedUsers(event)}
                        options={options}
                        displayValue='username'
                        placeholder="Select members"
                    />
                </div>
                <div className='projecttaskmodal_left_actions'>
                    <button className="button-skip">Cancel</button>
                    <button type='button' className="button-submit">Create</button>
                </div>
            </div>
        </div>
    )
}

export default CreateChatModal