import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Comments( props ){
    //const reducerName = useSelector( store => store.reducerName );
    //const [name, setName] =useState ( null );

    const dispatch = useDispatch();

    const [comments, setComments] =useState ( '' );

    //bring is all items from store 
    const feeling = useSelector (store => store.feeling);
    const understanding = useSelector (store => store.understanding);
    const supported = useSelector (store => store.supported);
    const comments = useSelector (store => store.comments);

    //create a variable that stores an object for all the answers 
    const [newOrder, setNewOrder] = useState({
        feeling: feeling,
        understanding: understanding, 
        supported: supported,
        comments: comments 
      })


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
                        />
                    </div>
                </div>
                <div className="nextButton">
                    <button 
                        onClick={ ()=>dispatch({
                            type:'ADD_COMMENTS',
                            payload: comments
                        })}
                        variant="contained"
                    >
                        <Link to="/thankyou">SUBMIT</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Comments;