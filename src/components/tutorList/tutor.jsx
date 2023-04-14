import React from 'react'
import { TutorCard } from './tutor.style'

const Tutor = (props) => {

    const { firstName, lastName, phone, city, email, options } = props;

  return (
      <TutorCard key={email}>
        <p>
            {firstName}
            <br />
            {lastName}
        </p>

        <p>
            {phone}
            <br />
            {email}
            <br />
            {city}
        </p>

        <p>
            {options}
        </p>
    </TutorCard>
  )
}

export default Tutor