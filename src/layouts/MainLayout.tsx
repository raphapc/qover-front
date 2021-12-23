import React from 'react';
import styled from '@emotion/styled';

interface IMainLayout {
  children: React.ReactNode;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: linear-gradient(106deg, #317bda 0%, rgba(49, 207, 218, 0.5) 91%), linear-gradient(to bottom, #317bda, #317bda);
`;

const MainLayout = ({ children }: IMainLayout) => {
  return <Container>{children}</Container>;
};

export default MainLayout;
