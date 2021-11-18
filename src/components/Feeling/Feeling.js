import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Feeling( props ){
    //const reducerName = useSelector( store => store.reducerName );
    //const [name, setName] =useState ( null );

    const dispatch = useDispatch();


    return(
        <div className="pageContainer">
            <div className="qSection">
                <div className="inputNextButton">
                    <h1>How are you feeling today?</h1>
                    <div className="inputField">
                        <label for="input">feeling?</label>
                        <input id="input" type="number"></input>
                    </div>
                </div>
                <div className="nextButton">
                    <button variant="contained"><Link to="/understanding">NEXT</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Feeling;