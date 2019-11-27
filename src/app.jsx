import React from 'react';
import PropTypes from 'prop-types';
import LocationDetails from './components/LocationDetails';

const App = () => <LocationDetails />;
App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
