import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import Banner from '../../atoms/Banner';
import Button from '../../atoms/Button';
import Footer from '../../atoms/Footer';
import MainLayout from '../../layouts/MainLayout';
import LoginPanel from '../../organisms/LoginPanel';
import { repositoryLogin } from '../../repository/MainRepository';
import { Container, LoginWrapper } from './styledComponents';
import { ILogin, LoginAttempt } from './types';

const Login = ({ onSuccesfulLogin }: ILogin) => {
  const [error, setError] = useState<string>('');

  const handleAttemptSignIn = async (loginData: LoginAttempt) => {
    const isLoginValid = await repositoryLogin(loginData);
    if (isLoginValid?.data) {
      onSuccesfulLogin();
    }
    setError('Incorrect username or password');
  };

  return (
    <MainLayout>
      <Container>
        <Banner />
        <Logo />
        <LoginWrapper>
          <LoginPanel onAttemptSignIn={handleAttemptSignIn} error={error} />
          <Button variant='outlined' onClick={() => {}}>
            <span>
              Don't have an account? <u>Ask access</u>
            </span>
          </Button>
        </LoginWrapper>
        <Footer />
      </Container>
    </MainLayout>
  );
};

export default Login;
