import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../Admin/Admin.css";


function AdminFeedbackItem( props ){
    //const reducerName = useSelector( store => store.reducerName );
    //const [name, setName] =useState ( null );

    const dispatch = useDispatch();

    return(
        <tr>
            <td>{props.feedback.feeling}</td>
            <td>{props.feedback.understanding}</td>
            <td>{props.feedback.support}</td>
            <td>{props.feedback.comments}</td>
        </tr>
    )
}

export default AdminFeedbackItem;