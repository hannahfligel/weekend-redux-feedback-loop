import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';

function App() {

  return (
    <div className='App'>
      <Header/>
      <Feeling />
      <Understanding />
      <Supported />
      <Comments />
      <ThankYou/>
    </div>
  );
}

export default App;
