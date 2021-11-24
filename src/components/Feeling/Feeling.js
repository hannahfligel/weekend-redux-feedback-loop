import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import badIcon from "../../icons/bw-bad.png";
import goodIcon from "../../icons/bw-good.png";
import greatIcon from "../../icons/bw-great.png";
import okayIcon from "../../icons/bw-okay.png";
import terribleIcon from "../../icons/bw-terrible.png";

function Feeling(props) {
  //const reducerName = useSelector( store => store.reducerName );
  //const [name, setName] =useState ( null );

  //add a feeling reducer to bring the feeling from the store
  const feelingReducer = useSelector((store) => store.feeling);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //using a useState hook, bring the saved feeling input from the store to display the initial val as whatever is stored.
  //This allows the user to go back to update the input, and if they choose to keep the input the way it was to avoid getting an error
  //the initial val of the commentReducer in the store is 0 to ensure that is nothing was inputted at anytime, the user will get an error.
  const [feeling, setFeeling] = useState(feelingReducer);

  //create a next function that will allow the user to navigate to the next page only if an input was entered, else, create an alert and don't move on to the next page
  const next = () => {
    //if feeling is less then 1 or grater than 5
    if (feeling < 1 || feeling > 5) {
      //return an alert
      return alert("Incorrect value entered");
    }
    // on the click of the next button send the feeling variable of what the user entered to the store via dispatch
    dispatch({
      // type is a unique identifier that lets tell what you which function you want to run in the reducer file
      type: "ADD_FEELING",
      //payload is the actual info you're sending to the store
      payload: feeling,
    });
    //navigate to the next page
    navigate("/understanding");
  };

  return (
    <div className="pageContainer">
      <div className="card">
        <div className="card-header">
          <h1>How are you feeling today?</h1>
        </div>
        <div className="cardBody">
          <div className="iconContainer">
            {/* onClick run an anonymous function to set the rating to the number associated with the icon the user clicked on*/}
            <div onClick={() => setFeeling(1)} className="iconButton">
              {/* tabIndex allow you to have a focus state the keep the clicked on item focused - need to add :focused in css */}
              <div tabIndex="0" className="terribleIconImg" />
              <p>Terrible</p>
            </div>
            <div onClick={() => setFeeling(2)} className="iconButton">
              <div tabIndex="0" className="badIconImg"></div>
              <p>Bad</p>
            </div>
            <div onClick={() => setFeeling(3)} className="iconButton">
              <div tabIndex="0" className="okayIconImg" />
              <p>Okay</p>
            </div>
            <div onClick={() => setFeeling(4)} className="iconButton">
              <div tabIndex="0" className="goodIconImg" />
              <p>Good</p>
            </div>
            <div onClick={() => setFeeling(5)} className="iconButton">
              <div tabIndex="0" className="greatIconImg" />
              <p>Great</p>
            </div>
          </div>
          {/* end of iconContainer ----> */}
        </div>
        {/* end of card body ----> */}

        <div className="feelingCardFooter">
          <button className="nextButton" onClick={next} variant="contained">
            NEXT
          </button>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Feeling;
