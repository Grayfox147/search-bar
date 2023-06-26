import React, { useState } from 'react';
import { debounce } from 'lodash';
import './searchbar.css';
import { Helmet } from 'react-helmet-async';
// import axios from 'axios';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [ setDebouncedQuery] = useState('');

    const applyQuery = debounce(setDebouncedQuery,  1000);

    const queryHandler = (event) => {
        setQuery(event.target.value);
        applyQuery(event.target.value);
    };



    return (
        <>
            <Helmet>
                <title>React-Searchbar</title>
            </Helmet>
            <div className='search'>
                <div className='searchInputs'>
                    <input
                        type="text"
                        value={query}
                        onChange={queryHandler}
                        placeholder='Search'
                    />
                    <div className='searchIcon'></div>
                </div>
                <div className='dataResult'></div>
            </div>
        </>
    );
};

export default SearchBar;