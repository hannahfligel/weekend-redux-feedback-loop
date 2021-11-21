import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




function Understanding( props ){
    //const reducerName = useSelector( store => store.reducerName );

    const understandingReducer = useSelector (store => store.understanding);    

    const dispatch = useDispatch();
    const navigate = useNavigate();


    //create a variable called understanding and set it's initial value to 0 
    const [understanding, setUnderstanding] = useState(understandingReducer);

      //create a next function that will allow the user to navigate to the next page only if an input was entered, else, create an alert and don't move on to the next page
      const next = () => {
        //if understanding is less then 1 or grater than 5
        if(understanding < 1 || understanding > 5){
            //return an alert 
            return alert("Incorrect value entered");
        }
        // on the click of the next button send the understanding variable of what the user entered to the store via dispatch 
        dispatch( {
            // type is a unique identifier that lets tell what you which function you want to run in the reducer file
            type:'ADD_UNDERSTANDING', 
            //payload is the actual info you're sending to the store 
            payload: understanding
        })
        //navigate to the next page 
        navigate('/supported');
    } 

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
                            defaultValue={understandingReducer}
                        />
                    </div>
                </div>
                <div className="nextButton">
                    <button 
                        //onClick of the next button, send the seeling variable of what the user entered to the store via dispatch 
                        onClick={ next}>NEXT</button>
                    <button>
                        <Link to="/">BACK</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Understanding;