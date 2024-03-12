import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Layout from './pages/theme/Layout';
import Post from './pages/theme/Post';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route path="/post" element={<Post />} />
          <Route path="/contact" element={<Layout />} />
          <Route path="/login" element={<Layout />} />
          <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
