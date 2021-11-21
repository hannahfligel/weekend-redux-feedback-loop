import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';




function Support( props ){
    //const reducerName = useSelector( store => store.reducerName );

    const supportReducer = useSelector (store => store.support);    

    const dispatch = useDispatch();
    const navigate = useNavigate();

    
    const [support, setSupport] =useState(supportReducer);


        //create a next function that will allow the user to navigate to the next page only if an input was entered, else, create an alert and don't move on to the next page
        const next = () => {
            //if support is less then 1 or grater than 5
            if(support < 1 || support > 5){
                //return an alert 
                return alert("Incorrect value entered");
            }
            // on the click of the next button send the support variable of what the user entered to the store via dispatch 
            dispatch( {
                // type is a unique identifier that lets tell what you which function you want to run in the reducer file
                type:'ADD_SUPPORT', 
                //payload is the actual info you're sending to the store 
                payload: support
            })
            //navigate to the next page 
            navigate('/comments');
        } 


    return(
        <div className="pageContainer">
            <div className="qSection">
                <div className="inputNextButton">
                    <h1>How well are you being support?</h1>
                    <div className="inputField">
                        <label htmlFor="input">Support?</label>
                        <input 
                            id="input" 
                            type="number"
                            min="1" 
                            max="5"
                            onChange={(event) => setSupport(event.target.value)}
                            defaultValue={supportReducer}
                        >
                        </input>
                    </div>
                </div>
                <div className="nextButton">
                    <button onClick={next} variant="contained">NEXT</button>
                    <button>
                        <Link to="/understanding">BACK</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Support;