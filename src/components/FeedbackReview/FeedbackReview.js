import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

function FeedbackReview(props) {
  //const reducerName = useSelector( store => store.reducerName );
  //const [name, setName] =useState ( null );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //bring is all items from store
  const feeling = useSelector((store) => store.feeling);
  const understanding = useSelector((store) => store.understanding);
  const support = useSelector((store) => store.support);
  const comments = useSelector((store) => store.comments);

  //create a variable that stores an object for all the answers
  const [newFeedback, setNewFeedback] = useState({
    feeling: feeling,
    understanding: understanding,
    support: support,
    comments: comments,
  });

  //create an axios post req to send feedback data to the db
  const addFeedback = () => {
    console.log("in addItem");
    axios
      .post("/api/feedback", newFeedback)
      .then((response) => {
        console.log("back from POST:", response.data);
        navigate("/thankyou");
      })
      .catch((err) => {
        console.log(err);
        alert("nope");
      });
  };

  return (
    <div className="pageContainer">
      <div className="card">
        <div className="card-header">
          <h1>Review Your Feedback</h1>
        </div>
        <div className="inputField">
          <p>Feeling score: {newFeedback.feeling}</p>
          <button>
            <Link to="/">UPDATE</Link>
          </button>
          <p>Understanding score: {newFeedback.understanding}</p>
          <button>
            <Link to="/understanding">UPDATE</Link>
          </button>
          <p>Support score: {newFeedback.support}</p>
          <button>
            <Link to="/supported ">UPDATE</Link>
          </button>
          <p>Comments: {newFeedback.comments}</p>
          <button>
            <Link to="/comments">UPDATE</Link>
          </button>
        </div>
        <div className="feelingCardFooter">
          <button className="nextButton" onClick={addFeedback}>SUBMIT</button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackReview;
