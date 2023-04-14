import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeContext } from './demo';

const NavWrapper = styled.div`
    width: 100%;
    background: ${ ({isDark}) => isDark ? '#4f2f31' : '#edc2c4' };
    height: 80px;
    border: 1px solid slateblue;

    display: flex ;
    padding: 10px ;

    color: white;

    display: flex ;
    justify-content: space-between;
    padding-right: 20px;

`;

const StyledHeader = styled.h2`
    color: ${ ({isDark}) => isDark ? 'aliceblue' : '#000' };   ;
`;

const TopNav = () => {

    const themeContext = useContext(ThemeContext);
    const { darkMode, updateDarkMode } = themeContext;

    return (
        <NavWrapper isDark={darkMode}>
            <StyledHeader isDark={darkMode}>
                TopNav
            </StyledHeader>

            <button onClick={() => {
                updateDarkMode(!darkMode);
            }}>{ darkMode ? 'NIGHT' : 'DAY'}</button>
        </NavWrapper>
    )
}

export default TopNav