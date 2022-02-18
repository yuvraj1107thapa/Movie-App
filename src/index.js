import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// function logger(obj, next, action)
// logger(obj)(next)(action)
// const logger = function ( {dispatch, getState} ) {
//     return function (next)  {
//         return function (action) {
//             // middleware code
//             console.log('ACTION_TYPE: ', action.type)
//             // next(action)
//         }
//     }
// }
const logger = ({dispatch, getState}) => (next) => (action) => {
    // logger code
    if(typeof action !== 'function') {
        console.log('ACTION_TYPE: ', action.type);
    }
    next(action);
}

// const thunk = ({dispatch, getState}) => (next) => (action) => {
//     // logger code
//     if(typeof action === 'function')  {
//         action(dispatch);
//         return;
//     }
//     next(action)
// }


const store = createStore(rootReducer, applyMiddleware(logger, thunk))
console.log('Store', store);

export const StoreContext = createContext();
console.log('StoreContext: ', StoreContext)

// console.log('Before STATE',store.getState());

// store.dispatch({
//     type: 'ADD_MOVIES',
//     movies: [ {name: 'Movie-1'} ]
// })

// console.log('After STATE', store.getState());

// ReactDOM.render(
//     <StoreContext.Provider value={store}>
//         <App store={store}/>
//     </StoreContext.Provider>, 
//     document.getElementById('root')
// );


// class Provider extends React.Component {
//     render() {
//         const {store} = this.props;
//         return (
//             <StoreContext.Provider value={store}>
//                 {this.props.children}
//             </StoreContext.Provider>
//         )
//     }
// }


// const connectedAppComponent = connect(callback)(App);

// export function connect(callback) {
//     return function(Component) {
//         class ConnectedComponent extends React.Component {
//             constructor(props) {
//                 super(props);
//                 this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
//             }
//             componentWillUnmount() {
//                 this.unsubscribe();
//             }
//             render() {
//                 // return (
//                 //     <StoreContext.Consumer>
//                 //         {(store) => {
//                 //             const state = store.getState();
//                 //             const dataToBePassedAsProps = callback();
//                 //             return <Component {...dataToBePassedAsProps} dispatch={store.dispatch} />
//                 //         }}
//                 //     </StoreContext.Consumer>
//                 // )
//                 const { store } = this.props;
//                 const state = store.getState();
//                 const dataToBePassedAsProps = callback(state);
//                 return (
//                     <Component {...dataToBePassedAsProps} dispatch={store.dispatch} />
//                 )
//             }
//         }

//         class ConnectedComponentWrapper extends React.Component {
//             render() {
//                 return (
//                     <StoreContext.Consumer>
//                         {(store) => {
//                             return <ConnectedComponent store={store} />
//                         }}
//                     </StoreContext.Consumer>
//                 )
//             }
//         }

//         return ConnectedComponentWrapper;
//     }
// }

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);