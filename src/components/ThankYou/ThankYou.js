import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function ThankYou( props ){
    //const reducerName = useSelector( store => store.reducerName );
    //const [name, setName] =useState ( null );

    const dispatch = useDispatch();

    const newFeedback = () => {
        dispatch ({
            type:'ADD_FEELING',
            payload: 0,
        })
        dispatch ({
            type:'ADD_UNDERSTANDING',
            payload: 0,
        })
        dispatch ({
            type:'ADD_SUPPORT',
            payload: 0,
        })
        dispatch ({
            type:'ADD_COMMENTS',
            payload: '',
        })
    }


    return(
        <div className="thankYouPage">
            <h1>Thank you!</h1>
            <Link className="newFeedbackButton" onClick={newFeedback} to="/">LEAVE NEW FEEDBACK</Link>
        </div>
    )
}

export default ThankYou;