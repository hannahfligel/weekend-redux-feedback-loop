import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function ThankYou( props ){
    //const reducerName = useSelector( store => store.reducerName );
    //const [name, setName] =useState ( null );

    const dispatch = useDispatch();

    return(
        <div className="thankYouPage">
            <h1>Thank you!</h1>
            <button variant="contained"><Link to="/">Leave new feedback</Link></button>
        </div>
    )
}

export default ThankYou;