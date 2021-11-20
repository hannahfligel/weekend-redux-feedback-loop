import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



function FeedbackReview( props ){
    //const reducerName = useSelector( store => store.reducerName );
    //const [name, setName] =useState ( null );

    const dispatch = useDispatch();
    
    const navigate = useNavigate();

        //bring is all items from store 
        const feeling = useSelector (store => store.feeling);
        const understanding = useSelector (store => store.understanding);
        const support = useSelector (store => store.support);
        const comments = useSelector (store => store.comments);
    
        //create a variable that stores an object for all the answers 
        const [newFeedback, setNewFeedback] = useState({
            feeling: feeling,
            understanding: understanding, 
            support: support,
            comments: comments 
          })


          const addFeedback = () => {
            console.log('in addItem');
            axios.post('/api/feedback', newFeedback).then((response) => {
              console.log('back from POST:', response.data);
              navigate('/thankyou');
            }).catch((err) => {
              console.log(err);
              alert('nope');
            })
          }




          return(
            <div className="pageContainer">
                <div className="qSection">
                    <div className="inputNextButton">
                        <h1>Review Your Feedback</h1>
                        <div className="inputField">
                            <p>{newFeedback.feeling}</p>
                            <p>{newFeedback.understanding}</p>
                            <p>{newFeedback.support}</p>
                            <p>{newFeedback.comments}</p>
                        </div>
                    </div>
                    <div className="nextButton">
                        <button onClick={addFeedback}>
                            SUMBIT
                        </button>
                    </div>
                </div>
            </div>
        )
    }

export default FeedbackReview;