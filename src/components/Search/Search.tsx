import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './_Search.scss'

import { BiSearch } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr'

import axios from 'axios';
import request from '../../api';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

import { UserData } from '../../models';

const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);

const Search: React.FC = () => {

    const { GetUserDetails } = useActions();
    const navigate = useNavigate();

    const InitialUpdate = useRef(true);

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const HandleSearchInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord)
    }

    useEffect(() => {
        if (InitialUpdate.current) {
            InitialUpdate.current = false;
            return;
        }
        const CancelToken = axios.CancelToken.source()
        const fetchUsers = async () => {
            try {
                const { data: usersData } = await request.get(`/api/v1/profiles?searchUserName=${wordEntered}`, {
                    cancelToken: CancelToken.token,
                    headers: {
                        'Authorization': `Bearer ${CurrentUser?.token}`,
                    },
                })
                setFilteredData(usersData)
            } catch (err) {
                if (axios.isCancel(Error)) {
                    return;
                }
            }
        }
        fetchUsers()
        return () => {
            CancelToken.cancel()
        }
    }, [wordEntered])


    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };


    const showUserProfile = (id: string) => {
        setFilteredData([])
        navigate(`/userprofile/${id}`)
    }
    return (
        <div className='wrapper'>
            <div className={filteredData.length === 0 ? "search" : "search search_mainactive"}>
                <div className="search_inputs">
                    <input
                        type="text"
                        onChange={HandleSearchInput}
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
                        filteredData.map((user: UserData) => (
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
