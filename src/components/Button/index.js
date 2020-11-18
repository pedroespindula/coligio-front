import React from 'react';
import { ButtonContainer } from './styles';

const Button = ({ children, style, onClick }) => {
  return (
    <ButtonContainer onClick={onClick} {...style}>
      {children}
    </ButtonContainer>
  );
};

export default Button;