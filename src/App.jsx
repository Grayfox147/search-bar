import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

import SearchBar from './components/searchbar';
import './App.css';

function App() {
    return (
        <HelmetProvider>
            <div className="App">
                <SearchBar />
            </div>
        </HelmetProvider>
    );
}

export default App;
