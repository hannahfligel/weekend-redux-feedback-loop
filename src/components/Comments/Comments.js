import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


function Comments( props ){
    //const reducerName = useSelector( store => store.reducerName );
    //const [name, setName] =useState ( null );

    const dispatch = useDispatch();

    const [comments, setComments] =useState ( '' );


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
                        <Link to="/feedbackreview">NEXT</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Comments;