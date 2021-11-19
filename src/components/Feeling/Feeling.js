import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Feeling( props ){
    //const reducerName = useSelector( store => store.reducerName );
    //const [name, setName] =useState ( null );

    const dispatch = useDispatch();

    const [feeling, setFeeling] = useState(0);

    return(
        <div className="pageContainer">
            <div className="qSection">
                <div className="inputNextButton">
                    <h1>How are you feeling today?</h1>
                    <div className="inputField">
                        <label htmlFor="input">feeling?</label>
                        <input 
                            id="input" 
                            type="number" 
                            onChange={(event) => setFeeling(event.target.value)}
                        />
                    </div>
                </div>
                <div className="nextButton">
                    <button 
                        onClick={ ()=>dispatch( {
                            type:'ADD_FEELING', 
                            payload: feeling
                        })} 
                        variant="contained"
                    >
                        <Link to="/understanding">NEXT</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Feeling;