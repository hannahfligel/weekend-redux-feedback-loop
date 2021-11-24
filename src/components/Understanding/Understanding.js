import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import badIcon from "../../icons/bw-bad.png";
import goodIcon from "../../icons/bw-good.png";
import greatIcon from "../../icons/bw-great.png";
import okayIcon from "../../icons/bw-okay.png";
import terribleIcon from "../../icons/bw-terrible.png";

function Understanding(props) {
  //const reducerName = useSelector( store => store.reducerName );

  const understandingReducer = useSelector((store) => store.understanding);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //create a variable called understanding and set it's initial value to 0
  const [understanding, setUnderstanding] = useState(understandingReducer);

  //create a next function that will allow the user to navigate to the next page only if an input was entered, else, create an alert and don't move on to the next page
  const next = () => {
    //if understanding is less then 1 or grater than 5
    if (understanding < 1 || understanding > 5) {
      //return an alert
      return alert("Incorrect value entered");
    }
    // on the click of the next button send the understanding variable of what the user entered to the store via dispatch
    dispatch({
      // type is a unique identifier that lets tell what you which function you want to run in the reducer file
      type: "ADD_UNDERSTANDING",
      //payload is the actual info you're sending to the store
      payload: understanding,
    });
    //navigate to the next page
    navigate("/supported");
  };

  return (
    <div className="pageContainer">
      <div className="card">
        <div className="card-header">
          <h1>How are you understanding today?</h1>
        </div>
        <div className="cardBody">
          <div className="iconContainer">
            {/* onClick run an anonymous function to set the rating to the number associated with the icon the user clicked on*/}
            <div onClick={() => setUnderstanding(1)} className="iconButton">
              <div tabIndex="0" className="terribleIconImg" />
              <p>Terrible</p>
            </div>
            <div onClick={() => setUnderstanding(2)} className="iconButton">
              <div tabIndex="0" className="badIconImg"></div>
              <p>Bad</p>
            </div>
            <div onClick={() => setUnderstanding(3)} className="iconButton">
              <div tabIndex="0" className="okayIconImg" />
              <p>Okay</p>
            </div>
            <div onClick={() => setUnderstanding(4)} className="iconButton">
              <div tabIndex="0" className="goodIconImg" />
              <p>Good</p>
            </div>
            <div onClick={() => setUnderstanding(5)} className="iconButton">
              <div tabIndex="0" className="greatIconImg" />
              <p>Great</p>
            </div>
          </div>
        </div>

        <div className="cardFooter">
            <Link className="link backButton" to="/">
              BACK
            </Link>
          <div>
            <button className="nextButton" onClick={next} variant="contained">
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Understanding;
