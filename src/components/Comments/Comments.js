import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Comments( props ){
    //const reducerName = useSelector( store => store.reducerName );
    //const [name, setName] =useState ( null );

    const dispatch = useDispatch();

    return(
        <div className="pageContainer">
            <div className="qSection">
                <div className="inputNextButton">
                    <h1>Any comments you want to leave?</h1>
                    <div className="inputField">
                        <label htmlFor="input">feeling?</label>
                        <input id="input"></input>
                    </div>
                </div>
                <div className="nextButton">
                <button variant="contained"><Link to="/thankyou">NEXT</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Comments;