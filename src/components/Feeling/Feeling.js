import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Feeling( props ){
    //const reducerName = useSelector( store => store.reducerName );
    //const [name, setName] =useState ( null );

    const dispatch = useDispatch();

    //create a variable called feeling and set it's initial value to 0 
    const [feeling, setFeeling] = useState(0);

    return(
        <div className="pageContainer">
            <div className="qSection">
                <div className="inputNextButton">
                    <h1>How are you feeling today?</h1>
                    <div className="inputField">
                        <label htmlFor="input">feeling?</label>
                        {/* create an onChange event that will change the value of feeling from 0 to what the user entered */}
                        <input 
                            id="input" 
                            type="number" 
                            onChange={(event) => setFeeling(event.target.value)}
                        />
                    </div>
                </div>
                <div className="nextButton">
                    <button 
                        // on the click of the next button send the feeling variable of what the user entered to the store via dispatch 
                        onClick={ ()=>dispatch( {
                            // type is a unique identifier that lets tell what you which function you want to run in the reducer file
                            type:'ADD_FEELING', 
                            //payload is the actual info you're sending to the store 
                            payload: feeling
                        })} 
                        
                        variant="contained" // <--mui styling 
                    >
                        {/* on the click of the next button, direct the user to the understanding page */}
                        <Link to="/understanding">NEXT</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Feeling;