import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import OnGoing from './pages/OnGoing';
import UpComing from './pages/UpComing';
import ShowTime from './pages/ShowTime';
import Discount from './pages/Discount';
import Entertaiment from './pages/Entertaiment';
import ServiceDetail from './pages/ServiceDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/movie/showing/" element={<OnGoing />} />
        <Route path="/movie/upcoming/" element={<UpComing />} />
        <Route path="/showtimes/" element={<ShowTime />} />
        <Route path="/discounts/" element={<Discount />} />
        <Route path="/cac-loai-hinh-giai-tri-khac/" element={<Entertaiment />} />
        <Route path="/:serviceId" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
