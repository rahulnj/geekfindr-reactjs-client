import React, { useState } from 'react'
import Multiselect from 'multiselect-react-dropdown'
import './_CreateChatModal.scss'
import { useSearch } from '../../hooks/useSearch';
import { FollowersData, RoomModalProps, UserData } from '../../models';
import { useActions } from '../../hooks/useActions';

const RoomModal = ({ chatUser }: RoomModalProps) => {

    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const { AddMembersToRoom } = useActions()
    const [selectedUser, setSelectedUser] = useState<any>({})
    const { filteredData, setFilteredData, setWordEntered, wordEntered }: any = useSearch();
    console.log(chatUser);

    let options = filteredData;
    //To check weather the multiselect option contains current username 
    let participantIds: string[] = []
    chatUser?.participants?.forEach((participant) => {
        participantIds.push(participant?.id)
    })

    options = options?.filter((user: any) => (
        !participantIds.includes(user?.id)
    )).map((user: any) => {
        return { username: user?.username, id: user?.id }
    })
    const addMemberToRoom = () => {
        AddMembersToRoom({
            token: CurrentUser?.id,
            conversationId: chatUser?.id,
            memberId: selectedUser?.[0]?.id
        })
    }

    return (
        <div className='createchat'>
            <h3 className='createchath3'>Add Member</h3>
            <div className='createchat_inputs'>
                <label className='createchat_inputs_label'>Members</label>
                <Multiselect
                    onSearch={(event) => setWordEntered(event)}
                    onSelect={(event) => setSelectedUser(event)}
                    onRemove={(event) => setSelectedUser(event)}
                    closeOnSelect={true}
                    emptyRecordMsg="search for users"
                    selectionLimit={1}
                    options={options}
                    displayValue='username'
                    placeholder={selectedUser.length === 0 ? "Select members" : ''}
                />
            </div>
            <button type='button' className="button-submit"
                onClick={addMemberToRoom}
            >+ Add</button>
        </div>
    )
}

export default RoomModal