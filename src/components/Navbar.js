import React from "react";
import { data } from '../data';
import { addMovieToList, handleMovieSearch } from '../actions';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: ''
        }
    }

    handleAddMovies = (movie) => {
        this.props.dispatch(addMovieToList(movie))
    }

    handleSearch = () => {
        const {searchText} = this.state;
        this.props.dispatch(handleMovieSearch(searchText));
    }

    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
    }
    render() {
        const { result: movie, showSearchResult } = this.props.search; 
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                    {
                        showSearchResult &&
                        <div className="search-results">
                            <div className="search-result">
                                <img src={movie.Poster} alt="search-pic" />
                                <div className="movie-info">
                                    <span>
                                        {movie.Title}
                                    </span>
                                    <button onClick={() => this.handleAddMovies(movie)}>
                                        Add to Movies
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Navbar;