import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


//feeling reducer (this is capturing the feeling the user inputs)
const feeling = (state=0, action)=>{
    //if the action type of 'ADD_FEELING 
    if( action.type === 'ADD_FEELING'){
        console.log( '------->In feeling reducer', action );
        //return the action payload that the user entered 
        return action.payload;
    }
    //else, (if the user doesn't input anything) return state (0)
    return state;
}

const understanding = (state=0, action)=>{
    if( action.type === 'ADD_UNDERSTANDING'){
        console.log( '------>in understanding reducer', action );
        return action.payload;
    }
    return state;
}

const support = (state=0, action)=>{
    if( action.type === 'ADD_SUPPORT'){
        console.log( '------->in support', action );
        return action.payload
    }
    return state;
}

const comments = (state='', action)=>{
    if( action.type === 'ADD_COMMENTS'){
        console.log( '------->in support', action );
        return action.payload
    }
    return state;
}

//store 
const feedbackStore = createStore(
    //use combineReducers to be able to set up multiple stores 
    combineReducers({
        feeling,
        understanding,
        support,
        comments
    })
)

ReactDOM.render(<Provider store={feedbackStore}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
