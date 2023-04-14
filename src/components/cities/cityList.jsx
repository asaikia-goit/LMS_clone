import React from 'react'
import City from './city'
import data from '../../data/universityInfo.json';
import { Fragment } from 'react';
import { StyledCities } from './city.style';

const CityList = () => {
    const { cities } = data;
  return (
      <StyledCities>
          {cities.map( (city) => <City cityName={city} /> )}
    </StyledCities>
  )
}

export default CityList