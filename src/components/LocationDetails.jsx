import React from 'react';
import PropTypes from 'prop-types';

const LocationDetails = props => (
  <div>
    <h1>{props.city}</h1>
    <h2>{props.country}</h2>
  </div>
);

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
