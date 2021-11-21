import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Understanding( props ){
    //const reducerName = useSelector( store => store.reducerName );

    const dispatch = useDispatch();

    //create a variable called understanding and set it's initial value to 0 
    const [understanding, setUnderstanding] = useState(0);

    return(
        <div className="pageContainer">
            <div className="qSection">
                <div className="inputNextButton">
                    <h1>How well are you understanding the content?</h1>
                    <div className="inputField">
                        <label htmlFor="input">Understanding?</label>
                        {/* create an onChange event that will change the value of understanding from 0 to what the user entered */}
                        <input 
                            id="input" 
                            type="number"
                            min="1" 
                            max="5"
                            onChange={(event)=> setUnderstanding (event.target.value)}
                        />
                    </div>
                </div>
                <div className="nextButton">
                    <button 
                        //onClick of the next button, send the seeling variable of what the user entered to the store via dispatch 
                        onClick={ ()=>dispatch({
                            type:'ADD_UNDERSTANDING',
                            payload: understanding
                        })}
                        variant="contained"
                    >
                        <Link to="/supported">NEXT</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Understanding;