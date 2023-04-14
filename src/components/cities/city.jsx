import React from 'react'
import { CityCard } from './city.style'

const City = ({cityName}) => {
  return (
    <CityCard>{cityName}</CityCard>
  )
}

export default City