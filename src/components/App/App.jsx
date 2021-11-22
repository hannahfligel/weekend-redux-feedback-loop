import React from 'react';
import axios from 'axios';
import './App.css';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import ThankYou from '../ThankYou/ThankYou';
import FeedbackReview from '../FeedbackReview/FeedbackReview';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Admin from '../Admin/Admin';


function App() {

  return (
    <div className='App'>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Feeling />}></Route>
          <Route path="/understanding" element={<Understanding />}></Route>
          <Route path="/supported" element={<Supported />}></Route>
          <Route path="/comments" element={<Comments/>}></Route>
          <Route path="/thankyou" element={<ThankYou/>}></Route>
          <Route path="/feedbackreview" element={<FeedbackReview/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
