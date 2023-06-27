import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import SearchBar from './components/searchbar';
import './App.css';

export default function App() {
    return (
        <HelmetProvider>
            <div className="App">
                <SearchBar />
            </div>
        </HelmetProvider>
    );
}

