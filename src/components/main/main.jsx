import React from 'react'
import Paper from '../paper/paper'
import {
    StyledMainWrapper,
    StyledUniversity,
    LogoWrapper,
    StyledUniversityCardContent,
} from './main.style'
import {ReactComponent as UniversityLogo} from '../../images/univ-logo.svg'
import TutorList from '../tutorList/tutorList'
import CityList from '../cities/cityList'

const UniversityCard = () => {
    return <Paper>
        <StyledUniversityCardContent>
        <LogoWrapper>
            <UniversityLogo />
        </LogoWrapper>
        <p>University</p>
        <h4>MIT</h4>
        </StyledUniversityCardContent>
        
        {/* remove later */}
        <div style={{width: '100%', height: '20px', display: 'flex', justifyContent: 'space-between'}}>
            <div style={{width: '20px', height: '20px', background: '#232323'}}></div>
            <div style={{width: '20px', height: '20px', background: '#232323'}}></div>
        </div>

    </Paper>

}

const UniversityDescription = () => {
    return <Paper>
            Experience, a concentration of knowledge and the ability to avoid most recruiting mistakes. We know what most local and foreign companies want and we can give it to you. And we are constantly improving our programming courses, adding something new there. You can see the success stories of our alumni for yourself to see the effectiveness of our teaching methodology. Yes, we will start with the basics and the most basic information. We know that most people come to us with zero knowledge.
    </Paper>
}


const Main = () => {
  return (
      <StyledMainWrapper>
          <StyledUniversity>
              <UniversityCard />
              <UniversityDescription />
          </StyledUniversity>

          <TutorList />

          <CityList />
      </StyledMainWrapper>
    )
}

export { Main };