import React from 'react';

import './_Search.scss'

import { BiSearch } from 'react-icons/bi';







const Search = () => {
    return (
        <div className='wrapper'>
            <div className="search">
                <div className="search_inputs">
                    <input
                        type="text" placeholder='search here....'
                    />
                    <div className="search_icon">
                        <BiSearch size={26} opacity={0.5} />
                    </div>
                </div>
            </div>
            <div className="search_dataresult">
                <a className="search_dataitem" target="_blank">
                    <p>web developer</p>
                </a>
                <a className="search_dataitem" target="_blank">
                    <p>web developer</p>
                </a>
                <a className="search_dataitem" target="_blank">
                    <p>web developer</p>
                </a>
            </div>
        </div>
    )
};

export default Search;
