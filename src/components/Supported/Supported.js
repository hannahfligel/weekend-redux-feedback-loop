import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Supported( props ){
    //const reducerName = useSelector( store => store.reducerName );
    //const [name, setName] =useState ( null );

    const dispatch = useDispatch();

    return(
        <div className="pageContainer">
            <div className="qSection">
                <div className="inputNextButton">
                    <h1>How well are you being supported?</h1>
                    <div className="inputField">
                        <label for="input">Support?</label>
                        <input id="input" type="number"></input>
                    </div>
                </div>
                <div className="nextButton">
                <button variant="contained"><Link to="/comments">NEXT</Link></button>
                </div>
            </div>
        </div>
    )
}


export default Supported;