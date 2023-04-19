import React from 'react'
import StyledButton from './button.style'

import { FaBeer } from "react-icons/fa";

const Button = ({ text = 'lorem ipsum', icon, onClickHandler }) => {
    
  return (
      <StyledButton
          onClick={onClickHandler}
      >
      {icon}
      <FaBeer/>
          <p style={{margin: '0px'}}>{text}</p>
    </StyledButton>
  )
}

export default Button