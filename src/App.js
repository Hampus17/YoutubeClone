import React from 'react';

import { SearchBar, VideoDetails } from './components';

import './App.css';
import youtube from './api/youtube';

class App extends React.Component {

    state = {
        videos: [], 
        selectedVid: null,
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get("search", {
             params: {  
                part: 'snippet',
                maxResults: 10, 
                key: API_KEY,
                q: searchTerm
                }
            });
        
        this.setState({ videos: response.data.items, selectedVid: response.data.items[0] });
    }

    render () {
        const { selectedVid } = this.state;
        
        return (
            <div id="container">
                <header id="searchBar">
                    <SearchBar onFormSubmit={this.handleSubmit} />
                </header>
                <div id="mainContent">

                </div>
                <div id="videoList"> 
                    <VideoDetails video={selectedVid} />
                </div>
            </div>
        );
    }
}

export default App 
