import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navs from './components/Navs';
import Home from './pages/Home';
import Starred from './pages/Starred';

const App = () => {
  return (
    <div>

      <Navs />
    
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/starred" element={<Starred />} />
      <Route path='*' element={<div>This is 404 page</div>} />
    </Routes>
    </div>
  );
}

export default App;