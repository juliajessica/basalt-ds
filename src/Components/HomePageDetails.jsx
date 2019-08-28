import React from 'react';
import { string } from 'prop-types';

import './homePageDetails.scss';

const HomePageDetails = ({ image, title, details }) => {
  return (
    <div className="homePageDetails_container">
      <img src={image} alt={title} />
      <p>{title}</p>
      <p>{details}</p>
    </div>
  );
};

HomePageDetails.propTypes = {
  image: string.isRequired,
  title: string.isRequired,
  details: string.isRequired
};

export default HomePageDetails;
