import React from 'react';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import Select from '../../atoms/Select';
import useInputValue from '../../hooks/useInputValue';
import { ButtonWrapper, Container, HighRiskError, PriceWrapper } from './styledComponents';
import { ISurveyPanel } from './types';

const InsuranceQuotePanel = ({ makers, errors, onSubmit }: ISurveyPanel) => {
  const age = useInputValue<number>(0);
  const maker = useInputValue<string>('');
  const purchasePrice = useInputValue<number>(0);

  const handleSubmit = () => {
    onSubmit({
      makerId: maker.value,
      purchasePrice: purchasePrice.value,
      age: age.value,
    });
  };

  const isDisabled = () => {
    if (age.value > 0 && purchasePrice.value > 0 && maker.value !== '') return false;
    return true;
  };

  const getError = (key: string): string => {
    const error = errors?.find((err) => err.key === key);
    if (error) return error.message!;
    return '';
  };

  return (
    <Container>
      <Input name='age' label='Age of the driver' type='number' variant='box' error={getError('age')} {...age} />
      <Select name='brand' label='Car' {...maker} options={makers} error={getError('maker')} />
      <PriceWrapper>
        <Input name='purchasePrice' label='Purchase Price' type='number' step='0.01' variant='box' error={getError('purchasePrice')} backLabel='€' {...purchasePrice} />
      </PriceWrapper>
      {getError('highRisk') && <HighRiskError>{getError('highRisk')}</HighRiskError>}
      <ButtonWrapper>
        <Button variant='lightblue' disabled={isDisabled()} onClick={handleSubmit}>
          Get a price
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default InsuranceQuotePanel;
