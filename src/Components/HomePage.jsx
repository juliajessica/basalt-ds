import React, { useState } from 'react';
import HomePageDetail from './HomePageDetail.jsx';
import book from '../Assets/pngIcons/001-reader.png';
import settings from '../Assets/pngIcons/002-settings.png';
import firewall from '../Assets/pngIcons/003-firewall.png';

import './homePage.scss';

const allDetails = [
  {
    image: book,
    title: 'Basalt',
    details: 'Stoked to have you in the office and completing this challenge!'
  },
  {
    image: settings,
    title: 'Tech',
    details: 'We already know you’re awesome, but knock this one out of the park!'
  },
  {
    image: firewall,
    title: 'Challenge',
    details: 'Thanks for showing off your technical dev skills in this exercise!'
  }
];

const HomePage = () => {
  const [loading, isLoading] = useState(false);
  return (
    <div className="homePage_container">
      <div className="homePage_description">
        <p>
          Basalt is a full-service digital agency that believes design systems empower businesses to
          grow and meet their unique goals. We help large, enterprise organizations increase speed
          to market, decrease their in-house technical teams’ burdens, and ensure brand consistency
          and information accuracy through design systems and other digital solutions. Our objective
          is to define and map an organization’s long-term vision, and then create the tools needed
          to reach those goals.
        </p>
      </div>
      <div className="homePage_details">
        {allDetails.map(detail => {
          return (
            <HomePageDetail title={detail.title} details={detail.details} image={detail.image} />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
