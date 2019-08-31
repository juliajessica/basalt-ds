import React, { useState, useEffect, Fragment } from 'react';
import HomePageDetails from './HomePageDetails';
import Spinner from './Spinner';
import NavBar from './NavBar';
import CarouselBanner from './CarouselBanner';
import Footer from './Footer';
import book from '../assets/svgIcons/001-reader.svg';
import settings from '../assets/svgIcons/002-settings.svg';
import firewall from '../assets/svgIcons/003-firewall.svg';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  if (loading) {
    return <Spinner />;
  }
  if (!loading) {
    return (
      <Fragment>
        <NavBar />
        <div className="homePage_container">
          <CarouselBanner />
          <p className="homePage_copy">
            Basalt is a full-service digital agency that believes design systems empower businesses to
            grow and meet their unique goals. We help large, enterprise organizations increase speed
            to market, decrease their in-house technical teams’ burdens, and ensure brand consistency
            and information accuracy through design systems and other digital solutions. Our objective
            is to define and map an organization’s long-term vision, and then create the tools needed
            to reach those goals.
          </p>
          <div className="homePage_details">
            {allDetails.map(detail => {
              return (
                <HomePageDetails
                  title={detail.title}
                  details={detail.details}
                  image={detail.image}
                  data-aos="fade-up"
                />
              );
            })}
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
  return <Spinner />;
};

export default HomePage;
