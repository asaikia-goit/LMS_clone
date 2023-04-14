import React from 'react'
import StyledButton from './button.style'

const Button = ({ text = 'lorem ipsum', icon, onClickHandler }) => {
    
  return (
      <StyledButton
          onClick={onClickHandler}
      >
          {icon}
          <p>{text}</p>
    </StyledButton>
  )
}

export default Button