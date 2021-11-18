import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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
                        <label for="input">feeling?</label>
                        <input id="input" type="number"></input>
                    </div>
                </div>
                <div className="nextButton">
                    <button>NEXT</button>
                </div>
            </div>
        </div>
    )
}


export default Supported;