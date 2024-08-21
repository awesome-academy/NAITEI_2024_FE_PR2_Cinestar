import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import OnGoing from './pages/OnGoing';
import UpComing from './pages/UpComing';
import ShowTime from './pages/ShowTime'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/movie/showing/" element={<OnGoing />} />
        <Route path="/movie/upcoming/" element={<UpComing />} />
        <Route path="/showtimes/" element={<ShowTime />} />
      </Routes>
    </Router>
  );
}

export default App;
