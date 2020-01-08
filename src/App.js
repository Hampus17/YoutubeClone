import React from 'react';

import { SearchBar, VideoDetails } from './components';

import './App.css';
import youtube from './api/youtube';

class App extends React.Component {

    handleSubmit = async (searchTerm) => {

    }

    render () {
        return (
            <div id="container">
                <header id="searchBar">
                    <SearchBar onFormSubmit={this.handleSubmit} />
                </header>
                <div id="mainContent">

                </div>
                <div id="videoList">
                    <VideoDetails />
                </div>
            </div>
        );
    }
}

export default App 