// {
//     type: 'ADD_MOVIES',
//     movies: [m1, m2, m3]; 
// }

// Action types
export const ADD_MOVIES = 'ADD_MOVIES'
export const ADD_TO_FAVOURITES = 'ADD_FROM_FAVOURITES'
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES'
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES'
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT'
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST'
 
// Action creators
export function addMovies(movies) {
    return {
        type: ADD_MOVIES,
        movies: movies
    }
}

export function addFavourite(movie) {
    return {
        type: ADD_TO_FAVOURITES,
        movie: movie
    }
}

export function removeFromFavourites(movie) {
    return {
        type: REMOVE_FROM_FAVOURITES,
        movie: movie
    }
}

export function setShowFavourites(val) {
    return {
        type: SET_SHOW_FAVOURITES,
        val
    }
}

export function addMovieToList(movie) {
    return {
        type: ADD_MOVIE_TO_LIST,
        movie
    }
}

export function handleMovieSearch(movie) {
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=10c72e6c&t=${movie}`;
    return function (dispatch) { // return a function (async action)
    fetch(url)
        .then(response => response.json())
        .then(movie => {
            console.log('MOVIE: ', movie);
            // dispatch an action
            dispatch(addMovieSearchResult(movie))
        })
    }
}

export function addMovieSearchResult(movie) {
    return {
        type: ADD_SEARCH_RESULT,
        movie
    }
}