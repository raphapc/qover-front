import React from 'react';
import { Inner, Outer } from './styledComponents';
import { IToggle } from './types';

const Toggle = ({ active, onToggle }: IToggle) => {
  return (
    <Outer onClick={onToggle}>
      <Inner active={active} />
    </Outer>
  );
};

export default Toggle;
