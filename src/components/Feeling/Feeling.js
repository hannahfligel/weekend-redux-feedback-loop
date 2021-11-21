import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Feeling( props ){
    //const reducerName = useSelector( store => store.reducerName );
    //const [name, setName] =useState ( null );

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //create a variable called feeling and set it's initial value to 0 
    const [feeling, setFeeling] = useState(0);

    //create a next function that will allow the user to navigate to the next page only if an input was entered, else, create an alert and don't move on to the next page
    const next = () => {
        //if feeling is less then 1 or grater than 5
        if(feeling < 1 || feeling > 5){
            //return an alert 
            return alert("Incorrect value entered");
        }
        // on the click of the next button send the feeling variable of what the user entered to the store via dispatch 
        dispatch( {
            // type is a unique identifier that lets tell what you which function you want to run in the reducer file
            type:'ADD_FEELING', 
            //payload is the actual info you're sending to the store 
            payload: feeling
        })
        //navigate to the next page 
        navigate('/understanding');
    } 

    

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
                            min="1" 
                            max="5"
                            onChange={(event) => setFeeling(event.target.value)}
                        />
                    </div>
                </div>
                <div className="nextButton">
                    <button onClick={next} variant="contained">NEXT</button>
                </div>
            </div>
        </div>
    )
}


export default Feeling;