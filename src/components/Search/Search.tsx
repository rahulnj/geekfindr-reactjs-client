import React, { useEffect, useState } from 'react';

import './_Search.scss'

import { BiSearch } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr'
import request from '../../api';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { profileData } from '../../models';








const Search: React.FC = () => {

    const navigate = useNavigate();
    const { user }: any = useTypedSelector(
        (state) => state.UserSignin
    )

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const HandleSearchFilter = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord)

    }

    useEffect(() => {
        const CancelToken = axios.CancelToken.source() // <-- 1st step
        const fetchUsers = async () => {
            try {
                const { data: usersData } = await request.get(`/api/v1/profiles?searchUserName=${wordEntered}`, {
                    cancelToken: CancelToken.token,
                    headers: {
                        'Authorization': `Bearer ${user?.token}`,
                    },
                })
                setFilteredData(usersData)
            } catch (err) {
                if (axios.isCancel(Error)) {
                    console.log('There was a problem or request was cancelled.')
                }
            }
        }
        fetchUsers()
        return () => {
            CancelToken.cancel() // <-- 3rd step
        }
    }, [wordEntered, user])


    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };
    const showUserProfile = (id: string) => {
        navigate(`userprofile/${id}`)
    }



    return (
        <div className='wrapper'>
            <div className={filteredData.length === 0 ? "search" : "search search_mainactive"}>
                <div className="search_inputs">
                    <input
                        type="text"
                        onChange={HandleSearchFilter}
                        placeholder='search here....'
                    />
                    <div className="search_icon">
                        {filteredData.length === 0 ? <BiSearch size={26} opacity={0.5} /> :
                            <GrFormClose size={26} opacity={0.5} onClick={clearInput} />}
                    </div>
                </div>
            </div>

            {filteredData.length !== 0 && (
                <div className={filteredData.length === 0 ? "search_dataresult" : "search_active"}>
                    {
                        filteredData.map((user: profileData) => (
                            <a className="search_dataitem" key={user.id} onClick={() => showUserProfile(user.id)}>
                                <img src={user.avatar} alt="" />
                                <p>{user.username}</p>
                            </a>
                        ))
                    }

                </div>
            )
            }
        </div >

    )
};

export default Search;
