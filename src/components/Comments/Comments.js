import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Comments( props ){
    //const reducerName = useSelector( store => store.reducerName );
    //const [name, setName] =useState ( null );

    //add a comment reducer to bring the comments from the store 
    const commentReducer = useSelector (store => store.comments);


    const dispatch = useDispatch();
    const navigate = useNavigate();


    //using a useState hook, bring the saved comments from the store to display the initial val as whatever is stored. 
    //This allows the user to go back to update the comments, and if they choose to keep the comment the way it was to avoid getting an empty string error 
    //the initial val of the commentReducer in the store is an empty string to ensure that is nothing was inputted at anytime, the user will get an error. 
    const [comments, setComments] = useState ( commentReducer );

            //create a next function that will allow the user to navigate to the next page only if an input was entered, else, create an alert and don't move on to the next page
            const next = () => {
                //if comments is less then 1 or grater than 5
                if(comments === ''){
                    //return an alert 
                    return alert("Incorrect value entered");
                }
                // on the click of the next button send the comments variable of what the user entered to the store via dispatch 
                dispatch( {
                    // type is a unique identifier that lets tell what you which function you want to run in the reducer file
                    type:'ADD_COMMENTS', 
                    //payload is the actual info you're sending to the store 
                    payload: comments
                })
                //navigate to the next page 
                navigate('/feedbackreview');
            } 


    return(
        <div className="pageContainer">
            <div className="qSection">
                <div className="inputNextButton">
                    <h1>Any comments you want to leave?</h1>
                    <div className="inputField">
                        <label htmlFor="input">comments?</label>
                        <textarea id="input"
                            id="input"
                            onChange={(event) => setComments(event.target.value)}
                            //set the default val of the text area to the comment reducer to allow the user to update their comment and to be able to see the previously entered comment 
                            defaultValue={commentReducer}
                        />
                    </div>
                </div>
                <div className="nextButton">
                    <button variant="contained" onClick={next}>
                        NEXT
                    </button>
                    <button>
                        <Link to="/supported">BACK</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Comments;