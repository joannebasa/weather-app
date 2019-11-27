import React from 'react';
import LocationDetails from './components/LocationDetails';

const App = props => (
  <LocationDetails city={props.location.city} country={props.location.country} />
);

export default App;
