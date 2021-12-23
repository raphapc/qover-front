import React, { useEffect, useState } from 'react';
import { IOption } from '../../atoms/Select/types';
import InsuranceQuotePanel from '../../organisms/InsuranceQuotePanel';
import { IError } from '../../organisms/InsuranceQuotePanel/types';
import { repositoryGetMakers, repositoryGetPlans } from '../../repository/MainRepository';
import { GetPlan, PlanResponse } from '../Plans/Plans';
import { Background, Container, InsuranceWrapper } from './styledComponents';

export interface ICarMakers {
  _id: string;
  _maker: string;
}

export interface IInsuranceQuote {
  onApprovedQuote: (plans: PlanResponse[]) => void;
}

const InsuranceQuote = ({ onApprovedQuote }: IInsuranceQuote) => {
  const [makers, setMakers] = useState<IOption[]>([]);
  const [errors, setErrors] = useState<IError[]>([]);

  useEffect(() => {
    fetchMakers();
  }, []);

  const fetchMakers = async () => {
    const makersResp = await repositoryGetMakers();
    setMakers(
      makersResp.data.map((maker) => ({
        label: maker._maker,
        value: maker._id,
      }))
    );
  };

  const handleSubmit = async (getPlan: GetPlan) => {
    try {
      const response = await repositoryGetPlans(getPlan);
      onApprovedQuote(response.data);
    } catch (err: any) {
      if (err?.response?.data?.error) {
        setErrors(err.response.data.error);
      }
    }
  };
  return (
    <Background>
      <Container>
        <InsuranceWrapper>
          <InsuranceQuotePanel makers={makers} onSubmit={handleSubmit} errors={errors} />
        </InsuranceWrapper>
      </Container>
    </Background>
  );
};

export default InsuranceQuote;
