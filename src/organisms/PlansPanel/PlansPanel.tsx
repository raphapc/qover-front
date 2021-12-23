import React from 'react';
import { ReactComponent as SelectedIcon } from '../../assets/images/selected.svg';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import PriceTag from '../../atoms/PriceTag';
import { ButtonWrapper, Container, Feature, HeadingWrapper, PriceWrapper } from './styledComponents';
import { IPlansPanel } from './types';

const PlansPanel = ({ title, price, features, monthly, selected, onSelect }: IPlansPanel) => {
  const getLabel = (): string => {
    if (monthly) return 'monthly incl. taxes';
    return 'yearly incl. taxes';
  };
  return (
    <Container selected={selected}>
      <HeadingWrapper>
        <Heading variant='h1' text={title} color={selected ? 'white' : undefined} />
      </HeadingWrapper>
      <PriceWrapper selected={selected}>
        <PriceTag amount={price.toFixed(2)} label={getLabel()} color={selected ? 'white' : '#31cfda'} />
      </PriceWrapper>
      <ul>
        {features.map((feature, index) => (
          <Feature key={index} selected={selected}>
            {feature}
          </Feature>
        ))}
      </ul>
      <ButtonWrapper>
        <Button variant={selected ? 'lightblue-selected' : 'lightblue'} onClick={onSelect}>
          {selected && (
            <>
              <SelectedIcon />
              Plan Selected
            </>
          )}
          {!selected && <>Choose this plan</>}
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default PlansPanel;
