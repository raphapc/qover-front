import styled from "@emotion/styled";
import CarSelectBg from '../../assets/images/carSelectBg.png';

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image:  url('${CarSelectBg}'), linear-gradient(106deg, #317bda 0%, rgba(49, 207, 218, 0.5) 91%), linear-gradient(to bottom, #317bda, #317bda);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InsuranceWrapper = styled.div`
  width: 900px;
  background-color: white;
  box-sizing: border-box;
`;
