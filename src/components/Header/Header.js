import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Header/Header.css';

function _template( props ){
    const tester = useSelector( store => store.tester );
    //const [name, setName] =useState ( null );

    const dispatch = useDispatch();

    const testDispatch = () => {
        dispatch( {type: 'TEST', payload: {msg: `cheers!`} });
    }

    return(
        <div>
            <header className='App-header'>
                <h1 className='App-title'>Feedback!</h1>
                <h4>Don't forget it!</h4>
                <p> { JSON.stringify( tester ) }</p>
                <button onClick={ testDispatch }>dispatch</button>
            </header>
        </div>
    )
}

export default _template;