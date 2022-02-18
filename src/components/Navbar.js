import React from "react";
import { addMovieToList, handleMovieSearch } from '../actions';
// import { connect, StoreContext } from '..'
import { connect } from 'react-redux'

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
                        showSearchResult == true &&
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

// class NavbarWrapper extends React.Component {
//     render() {
//       return (
//         <StoreContext.Consumer>
//           {(store) => {
//             return <Navbar dispatch={store.dispatch} search={this.props.search} />
//           }}
//         </StoreContext.Consumer>
//       )
//     }
//   }

// export default NavbarWrapper;

function mapStateToProps(state) {
    return {
        search: state.search
    }
}

const connectedNavbarComponent = connect(mapStateToProps)(Navbar);
export default connectedNavbarComponent;