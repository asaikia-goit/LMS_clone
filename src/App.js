import React from 'react';
import styled from 'styled-components/macro';
import Main from './components/main';
import Sidebar from './components/sidebar/sidebar';
import Demo from './pages/demo/demo';

const StyledWrapper = styled.div`
    display: flex ;
`;

/**
 *              App
 *               /\
 *              /  \
 *        <Sidebar>  <Main>
 */

const App = () => {
    // return <StyledWrapper>
    //     <Sidebar />
    //     <Main />
    // </StyledWrapper>

    return <Demo />
}

export default App;
