import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Table } from "react-bootstrap";
import AdminFeedbackItem from "./AdminFeedbackItem";
import "../Admin/Admin.css";

function Admin(props) {
  //const reducerName = useSelector( store => store.reducerName );
  //const [name, setName] =useState ( null );

  useEffect(() => {
    getAdmin();
  }, []);

  const [adminFeedback, setAdminFeedback] = useState([]);

  // run an axios call to being in user feedback from db
  const getAdmin = () => {
    axios
      .get("/api/feedback")
      .then((res) => {
        console.log("Successful AXIOS GET", res.data);
        setAdminFeedback(res.data);
        console.log(adminFeedback);
      })
      .catch((err) => {
        console.log("Error in AXIOS GET");
      });
  };

  return (
    <div className="adminDiv container">
      <h1>Admin</h1>
      <table striped bordered hover>
        <thead>
          <tr>
            <th>Feeling</th>
            <th>Understanding</th>
            <th>Support</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {/* map though AdminFeedbackItem to being in each individual item from the db */}
          {adminFeedback.map((feedback) => (
            <AdminFeedbackItem feedback={feedback} key={feedback.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
