import React from 'react';
import { ButtonContainer } from './styles';

const Button = ({ children, style, event }) => {
  return (
    <ButtonContainer onClick={event} {...style}>
      {children}
    </ButtonContainer>
  );
};

export default Button;