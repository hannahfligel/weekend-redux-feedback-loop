import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function _template( props ){
    //const reducerName = useSelector( store => store.reducerName );
    //const [name, setName] =useState ( null );

    const dispatch = useDispatch();

    return(
        <div>
            <h1>_template</h1>
        </div>
    )
}

export default _template;