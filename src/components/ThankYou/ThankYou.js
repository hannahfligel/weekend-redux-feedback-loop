import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ThankYou( props ){
    //const reducerName = useSelector( store => store.reducerName );
    //const [name, setName] =useState ( null );

    const dispatch = useDispatch();

    return(
        <div className="thankYouPage">
            <h1>Thank you!</h1>
            <button>Leave new feedback</button>
        </div>
    )
}

export default ThankYou;