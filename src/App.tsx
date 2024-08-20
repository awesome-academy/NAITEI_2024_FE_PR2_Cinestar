import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import OnGoing from './pages/OnGoing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/movie/showing/" element={<OnGoing />} />
      </Routes>
    </Router>
  );
}

export default App;
