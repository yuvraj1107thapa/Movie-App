import { combineReducers } from 'redux'
import { 
    ADD_MOVIES, 
    ADD_TO_FAVOURITES, 
    REMOVE_FROM_FAVOURITES, 
    SET_SHOW_FAVOURITES,
    ADD_SEARCH_RESULT,
    ADD_MOVIE_TO_LIST,
} from '../actions/index.js'

const initialMovieState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export function movies(state = initialMovieState, action) {
    // if(action.type == ADD_MOVIES) {
    //     return {
    //         ...state,
    //         list: action.movies
    //     }
    // }
    // return state;
    switch(action.type) {
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const movieToBeRemove = action.movie
            const filteredArray = state.favourites.filter( (movie) => {
                return movie.title !== movieToBeRemove.title
            })
            return {
                ...state,
                favourites: filteredArray
            }
        case SET_SHOW_FAVOURITES: 
            return {
                ...state,
                showFavourites: action.val
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list: [action.movie, ...state.list]
            }
        default:
            return state
    }   
}

const initialSearchState = {
    result: {},
    showSearchResult: false
}

export function search(state = initialSearchState, action) {
    // console.log('SEARCH REDUCER');
    switch(action.type) {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie,
                showSearchResult: true
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                showSearchResult: false
            }
        default:
            return state
    }
}

// const initialRootState = {
//     movies: initialMovieState,
//     search: initialSearchState
// }

// export default function rootReducer(state = initialRootState, action) {
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

export default combineReducers({
    movies: movies,
    search: search
})