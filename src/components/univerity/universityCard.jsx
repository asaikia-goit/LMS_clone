import React from 'react'
import Paper from '../paper/paper'
import {
    LogoWrapper,
    StyledUniversityCardContent,
} from './main.style'
import {ReactComponent as UniversityLogo} from '../../images/univ-logo.svg'

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

export default UniversityCard;