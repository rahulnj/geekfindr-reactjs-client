import React, { useEffect, useState } from 'react'

import './_CreateChatModal.scss'
import Multiselect from 'multiselect-react-dropdown';
import { useSearch } from '../../hooks/useSearch';
import { conversationObj, CreateChatModalProps, UserData } from '../../models';
import { useActions } from '../../hooks/useActions';



const CreateChatModal: React.FC<CreateChatModalProps> = ({ setIsChatModal }) => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const { CreateConversationOrRoom } = useActions();
    const [roomName, setRoomName] = useState('')
    const [selectedUsers, setSelectedUsers] = useState([])
    const { filteredData, setFilteredData, setWordEntered, wordEntered } = useSearch();

    let options: any = filteredData;
    //To check weather the multiselect option contains current username 
    options = options?.filter((user: any) => (
        user?.id != CurrentUser?.id
    )).map((user: any) => {
        return { username: user?.username, id: user?.id }
    })


    const createRoomConversation = () => {
        const updatedSelectedUsers = selectedUsers?.map((user: any) => (
            user.id
        ))
        const conversationObj: conversationObj = {
            isRoom: true,
            roomName,
            participants: updatedSelectedUsers
        }
        console.log(conversationObj);
        CreateConversationOrRoom({
            token: CurrentUser?.token,
            conversationObj
        })
        setIsChatModal(false)
    }

    return (
        <div className="createchat">
            <div className="createchat_wrapper">
                <h3>Create Room</h3>
                <div className='createchat_inputs'>
                    <label className='createchat_inputs_label'>Room Name</label>
                    <input className='createchat_inputs_input' type="text"
                        onChange={(e) => setRoomName(e.target.value)}
                    />
                </div>
                <div className='createchat_inputs'>
                    <label className='createchat_inputs_label'>Members</label>
                    <Multiselect
                        onSearch={(event) => setWordEntered(event)}
                        onSelect={(event) => setSelectedUsers(event)}
                        onRemove={(event) => setSelectedUsers(event)}
                        options={options}
                        displayValue='username'
                        placeholder={selectedUsers.length === 0 ? "Select members" : ''}
                    />
                </div>
                <div className='projecttaskmodal_left_actions'>
                    <button className="button-skip"
                        onClick={() => setIsChatModal(false)}
                    >Cancel</button>
                    <button type='button' className="button-submit"
                        onClick={createRoomConversation}
                    >Create</button>
                </div>
            </div>
        </div>
    )
}

export default CreateChatModal