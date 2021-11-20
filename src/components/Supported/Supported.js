import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Supported( props ){
    //const reducerName = useSelector( store => store.reducerName );

    const dispatch = useDispatch();
    
    const [supported, setSupported] =useState(0);


    return(
        <div className="pageContainer">
            <div className="qSection">
                <div className="inputNextButton">
                    <h1>How well are you being supported?</h1>
                    <div className="inputField">
                        <label htmlFor="input">Support?</label>
                        <input id="input" type="number"></input>
                    </div>
                </div>
                <div className="nextButton">
                    <button 
                        onClick={ ()=>dispatch({
                            type:'ADD_SUPPORTED',
                            payload: supported
                        })}
                        variant="contained"
                    >
                        <Link to="/comments">NEXT</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Supported;