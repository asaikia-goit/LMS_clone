import React from 'react'
import styled from 'styled-components';

const FooterWrapper = styled.div`
    width: 100%;
    background: aliceblue;
    height: 40px;
    border: 2px solid #000;

    display: flex ;
    align-items: center ;
    padding: 10px ;

    color: indianred;

`;

const Para = () =>
    <p>
              This is a Footer !
    </p>
          
const Footer = () => {
  return (
      <FooterWrapper>
          <Para/>
    </FooterWrapper>
  )
}

export default Footer