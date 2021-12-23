import styled from '@emotion/styled';
import BackgroundTravel from '../../assets/images/background-travel.svg';
import { IFrequencyLabel } from './Plans';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: url('${BackgroundTravel}') top center no-repeat, rgba(72, 72, 72, 0.05);
  background-size: contain;

  height: 100vh;
  > div:not(:last-of-type) {
    margin-right: 15px;
  }

  > span:first-of-type {
    margin-bottom: 40px;
  }
`;

export const FrequencyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  margin-bottom: 40px;

  > div {
    margin: 0 10px;
  }
`;

export const FrequencyLabel = styled.span<IFrequencyLabel>`
  text-transform: uppercase;
  color: white;
  font-size: 13px;
  ${({ selected }) => selected && `font-weight: bold`};
`;

export const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > div:not(:last-of-type) {
    margin-right: 15px;
  }
`;

export const QuoteWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

export const LinkFullList = styled.div`
  height: 16px;
  margin: 30px 0;
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #31cfda;
  > a {
    margin-right: 16px;
  }
`;
