import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBooks from './components/SearchBooks';
import Bookshelf from './components/Bookshelf';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchBooks />} />
        <Route path="/bookshelf" element={<Bookshelf />} />
      </Routes>
    </Router>
  );
};

export default App;
