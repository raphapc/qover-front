import React, { ReactNode, useState } from 'react';
import { ReactComponent as ComparisonIcon } from '../../assets/images/comparison.svg';
import Heading from '../../atoms/Heading';
import Toggle from '../../atoms/Toggle';
import PlansPanel from '../../organisms/PlansPanel';
import { Background, FrequencyLabel, FrequencyWrapper, LinkFullList, OptionWrapper, QuoteWrapper } from './styledComponents';

export interface IPlan {
  planRes?: PlanResponse[];
}

export interface GetPlan {
  makerId: string;
  purchasePrice: number;
  age: number;
}

export interface PlanResponse {
  coverageDuration: string;
  id: number;
  maxDuration: string;
  medicalExpanse: string;
  personalAssistance: string;
  price: {
    monthly: number;
    yearly: number;
  };
  title: string;
  travelAssistance: string;
}

export interface IFrequencyLabel {
  selected: Boolean;
}

const Plans = ({ planRes }: IPlan) => {
  const [selectedPlan, setSelectedPlan] = useState<number>();
  const [monthly, setMonthly] = useState<boolean>(false);
  const renderedPlans: ReactNode[] = [];
  const handleToggleMonthly = () => {
    setMonthly(!monthly);
  };
  if (!planRes) return null;

  planRes.map((plan, index) => {
    renderedPlans.push(
      <QuoteWrapper key={plan.id}>
        <PlansPanel
          title={plan.title}
          price={monthly ? plan.price.monthly : plan.price.yearly}
          features={[
            <span>
              <b>Maximum duration travel</b> of <b>{plan.maxDuration} days</b>
            </span>,
            <span>
              <b>Medical expenses reimbursement</b> up to <b>{plan.medicalExpanse} €</b>
            </span>,
            <span>
              <b>Personal assistance abroad</b> up to <b>{plan.personalAssistance} €</b>
            </span>,
            <span>
              <b>Travel assistance abroad</b> up to <b>{plan.travelAssistance} €</b> per insured per travel
            </span>,
            <span>
              <b>Coverage duration: {plan.coverageDuration} year</b>
            </span>,
          ]}
          onSelect={() => setSelectedPlan(index)}
          selected={selectedPlan === index}
          monthly={monthly}
        />
      </QuoteWrapper>
    );
  });

  return (
    <Background>
      <Heading variant='title' color='white' text='Select a plan' />
      <FrequencyWrapper>
        <FrequencyLabel selected={monthly}>pay monthly</FrequencyLabel>
        <Toggle active={!monthly} onToggle={handleToggleMonthly} />
        <FrequencyLabel selected={!monthly}>pay yearly</FrequencyLabel>
      </FrequencyWrapper>
      <OptionWrapper>{renderedPlans}</OptionWrapper>
      <LinkFullList>
        <a>Show me the full comparison</a>
        <ComparisonIcon />
      </LinkFullList>
    </Background>
  );
};

export default Plans;
