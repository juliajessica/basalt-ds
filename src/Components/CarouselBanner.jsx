import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Carousel } from 'react-bootstrap';
import AOS from 'aos';
import people from '../assets/pngIcons/people.png';
import './carouselBanner.scss';

const CarouselBanner = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500
    });
  }, []);

  return (
    <Carousel>
      <Carousel.Item className="carouselBanner_container">
        <div className="carouselBanner_bg-image-1" />
        <Carousel.Caption className="carouselBanner_text">
          <h1 data-aos="fade-up">Design Systems</h1>
          <p>The future of design at scale</p>
          <Link to="/"><button type="button">Find Out More</button></Link>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carouselBanner_bg-image-2" />
        <Carousel.Caption>
          <div className="carouselBanner_slide-2-content">
            <div className="carouselBanner_slide-2-content-copy">
              <div>
                <h1>
                  Building a common foundation
                </h1>
                <ul>
                  <li>Creating a brand identity</li>
                  <li>Single source of truth</li>
                  <li>And a shared language</li>
                </ul>
              </div>
            <img src={people} alt="business and design" />
            </div>
            <hr />
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carouselBanner_bg-image-3" />
        <Carousel.Caption>
          <div className="carouselBanner_slide-3-content">
            <h1>10/10</h1>
            <p>Customizable and easily adaptable to your brand.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselBanner;
