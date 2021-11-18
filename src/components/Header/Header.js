import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Header/Header.css';

function _template( props ){
    //const reducerName = useSelector( store => store.reducerName );
    //const [name, setName] =useState ( null );

    const dispatch = useDispatch();

    return(
        <div>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget it!</h4>
            </header>
        </div>
    )
}

export default _template;