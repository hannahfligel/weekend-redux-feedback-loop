import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

//test reducer 
const tester = (state='Hello world!', action)=>{
    console.log( 'in tester reducer:', action );
    return state;
}

//store 
const feedbackStore = createStore(
    //use combineReducers to be able to set up multiple stores 
    combineReducers({
        tester
    })
)

ReactDOM.render(<Provider store={feedbackStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
