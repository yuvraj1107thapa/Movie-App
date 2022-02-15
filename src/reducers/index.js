import { ADD_MOVIES, ADD_FAVOURITE, REMOVE_FAVOURITE } from '../actions/index.js'

const initialState = {
    list: [],
    favourites: []
}

export default function movies(state = initialState, action) {
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
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        case REMOVE_FAVOURITE:
            const movieToBeRemove = action.movie
            const newFav = state.favourites.filter( (item) => {
                return item !== movieToBeRemove
            })
            return {
                ...state,
                favourites: newFav
            }
        default: 
            return state
    }   
}