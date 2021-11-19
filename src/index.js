import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

//feeling reducer (this is capturing the feeling the user inputs)
const feeling = (state=0, action)=>{
    console.log( '=======>In feeling reducer', action );
    if( action.type === 'ADD_FEELING'){
        return action.payload;
    }
    return state;
}

//store 
const feedbackStore = createStore(
    //use combineReducers to be able to set up multiple stores 
    combineReducers({
        feeling
    })
)

ReactDOM.render(<Provider store={feedbackStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
