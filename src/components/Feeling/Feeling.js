import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Feeling( props ){
    //const reducerName = useSelector( store => store.reducerName );
    //const [name, setName] =useState ( null );

    //add a feeling reducer to bring the feeling from the store 
    const feelingReducer = useSelector (store => store.feeling);    

    const dispatch = useDispatch();
    const navigate = useNavigate();

    //using a useState hook, bring the saved feeling input from the store to display the initial val as whatever is stored. 
    //This allows the user to go back to update the input, and if they choose to keep the input the way it was to avoid getting an error 
    //the initial val of the commentReducer in the store is 0 to ensure that is nothing was inputted at anytime, the user will get an error. 
    const [feeling, setFeeling] = useState(feelingReducer);

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
                            //set the default val of the input field to the feelingReducer to allow the user to update their input and to be able to see the previously entered input 
                            defaultValue={feelingReducer}                            
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