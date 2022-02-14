// {
//     type: 'ADD_MOVIES',
//     movies: [m1, m2, m3]; 
// }

// Action types
export const ADD_MOVIES = 'ADD_MOVIES'

// Action creators
export function addMovies(movies) {
    return {
        type: 'ADD_MOVIES',
        movies: movies
    }
}