import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './_Search.scss'

import { BiSearch } from 'react-icons/bi';
import { GrFormClose } from 'react-icons/gr'

import axios from 'axios';
import request from '../../api';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

import { SearchProps, UserData } from '../../models';
import { useSearch } from '../../hooks/useSearch';

const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);

const Search: React.FC = () => {

    const navigate = useNavigate();

    const { filteredData, setFilteredData, setWordEntered, wordEntered } = useSearch()


    const HandleSearchInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchWord = e.target.value;
        setWordEntered(searchWord)
    }



    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };


    const showUserProfile = (id: string) => {
        setFilteredData([])
        navigate(`/userprofile/${id}`)
        setWordEntered("");
    }
    return (
        <div className='wrapper'>
            <div className={filteredData.length === 0 ? "search" : "search search_mainactive"}>
                <div className="search_inputs">
                    <input
                        type="text"
                        onChange={HandleSearchInput}
                        placeholder='search here....'
                        value={wordEntered}
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
