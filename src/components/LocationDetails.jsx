import React from 'react';
import PropTypes from 'prop-types';

const LocationDetails = props => (
  <div>
    <h1>
      {props.city}, {props.country}
    </h1>
  </div>
);

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
