import React, { useState } from 'react';
import  debounce  from 'lodash.debounce';
import './searchbar.css';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

const BASE_URL = 'https://mate.academy/students-api';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [ setDebouncedQuery] = useState('');
    const [goods, setGoods] = useState([]);

    const applyQuery = debounce(setDebouncedQuery,  1000);

    const queryHandler = (event) => {
        setQuery(event.target.value);
        applyQuery(event.target.value);
    };

    const handleInput = () => {
        axios.get(`${BASE_URL}/goods`)
            .then((data) => data.json)
            .then((goods) =>  setGoods(goods));
    };



    return (
        <div>
            <Helmet>
                <title>React-Searchbar</title>
                <meta name='title'/>
            </Helmet>
            <div className='search'>
                <form
                    className='searchInputs'
                    onInput={handleInput}
                >
                    <input
                        type="text"
                        value={query}
                        onChange={queryHandler}
                        placeholder='Search'
                    />
                    <div className='searchIcon'></div>
                    <button>search</button>
                </form>
                <div className='dataResult'></div>
                <div>{goods}</div>
            </div>
        </div>
    );
};

export default SearchBar;