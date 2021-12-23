import React from 'react';
import { Container } from './styledComponents';
import { IButton } from './types';

const Button = ({ variant, children, disabled, onClick }: IButton) => {
  return (
    <Container variant={variant} onClick={() => !disabled && onClick()} disabled={disabled}>
      {children}
    </Container>
  );
};

export default Button;
