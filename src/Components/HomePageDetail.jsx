import React from 'react';
import { string } from 'prop-types';

const HomePageDetail = ({ image, title, details }) => {
  return (
    <div className="homePageDetails-container">
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{details}</p>
    </div>
  );
};

HomePageDetail.prototype = {
  image: string,
  title: string,
  details: string
};

export default HomePageDetail;
