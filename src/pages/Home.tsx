import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import OnGoing from '../components/OnGoing';
import UpComing from '../components/UpComing';
import DiscountSlider from '../components/DiscountSlider';
import CMember from '../components/CMember';
import Entertainment from '../components/Entertaiment';
import '../i18n';


function Home() {
  return (
    <div className="App bg-[#0f172a]">
      <Header />
      <div className="mt-40 bg-[#0f172a]">
        <Banner />
        <OnGoing />
        <UpComing />
        <DiscountSlider />
        <CMember />
        <Entertainment />
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
