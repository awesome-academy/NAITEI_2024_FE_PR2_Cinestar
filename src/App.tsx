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
import AboutUs from './pages/AboutUs';
import PopCorn from './pages/PopCorn';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';

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
        <Route path="/about-us/" element={<AboutUs />} />
        <Route path="/popcorn-drink/" element={<PopCorn />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/forgotpassword/" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
