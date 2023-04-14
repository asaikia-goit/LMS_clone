import React from 'react'
import { Fragment } from 'react';
import data from '../../data/universityInfo.json';
import Tutor from './tutor';

const TutorList = () => {
  const { tutors } = data;
  return (
    <Fragment>
      {
        tutors.map((tutor) => {
          return <Tutor {...tutor} />
        })
      }
    </Fragment>
  )
}

export default TutorList