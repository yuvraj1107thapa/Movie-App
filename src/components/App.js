import React from 'react';
import { data } from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourites } from '../actions'
// import { StoreContext } from '../index'
// import {connect} from '../index';
import { connect } from 'react-redux'

class App extends React.Component {
  componentDidMount() {
    // const { store } = this.props;
    
    // store.subscribe( () => {
    //   console.log('Updated');
    //   this.forceUpdate();
    // })
    // make API call
    // dispatch action
    this.props.dispatch(addMovies(data));

    // console.log('STATE', store.getState());
  }

  isFavourite = (movie) => {
    // const { movies } = this.props.store.getState();
    const { movies } = this.props;
    const index = movies.favourites.indexOf(movie);
    if(index !== -1) {
      return true;
    }
    return false;
  }

  onChangeTab = (val) => {
    // this.props.store.dispatch(setShowFavourites(val))
    this.props.dispatch(setShowFavourites(val))
  }

  render() {  

    // const { movies, search } = this.props.store.getState(); // { movies: {}, search: {} }
    const { movies, search } = this.props; // { movies: {}, search: {} }
    const { list, favourites = [], showFavourites = []} = movies; 
    // console.log('RENDER', this.props.getState());
    const displayMovies = showFavourites ? favourites : list;

    return (
      <div className="App">
        <Navbar search={search}/>
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={() => this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourites ?'active-tabs' : ''}`} onClick={() => this.onChangeTab(true)}>Favourites</div>
          </div>

          <div className="list">
            {displayMovies.map( (movie, index) => (
                <MovieCard 
                  movie={movie} 
                  key={`movies-${index}`} 
                  // dispatch={this.props.store.dispatch}
                  dispatch={this.props.dispatch}
                  isFavourite={this.isFavourite(movie)}/>
            ))}
          </div>
          {favourites.length === 0 ? <div className='no-movies'>No Movies to display!</div> : null}
        </div>
      </div>
    );
  }
}

// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => {
//           return <App store={store}/>
//         }}
//       </StoreContext.Consumer>
//     )
//   }
// }

// export default AppWrapper;

// Callback function to get props from store state
function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.search
  }
}

const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;