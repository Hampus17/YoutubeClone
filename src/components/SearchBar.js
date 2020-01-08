import React from 'react';


class SearchBar extends React.Component {
    state = {
        searchTerm: '',

    }

    handleChange = (event) => {  
        this.setState({ searchTerm: event.target.value})  // Call it as a function and provide an object as arguments
    }

    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(searchTerm);
        event.preventDefault();
    }

    render() {
        return (
            <div id="searchContainer">
                <form id="search" onSubmit={this.handleSubmit}>
                    <input name="search" placeholder="Search..." onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }
}

export default SearchBar;