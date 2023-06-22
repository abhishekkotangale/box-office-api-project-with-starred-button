import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';

const App = () => {
  return (
    
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/starred" element={<Starred />} />
      <Route path='*' element={<div>This is 404 page</div>} />
    </Routes>
  );
}

export default App;