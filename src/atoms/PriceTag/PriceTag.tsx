import React from 'react';
import { Label, Tag, Wrapper } from './styledComponents';
import { IPriceTag } from './types';

const PriceTag = ({ amount, label, color }: IPriceTag) => {
  return (
    <Wrapper color={color}>
      <Tag>{amount}</Tag>
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default PriceTag;
