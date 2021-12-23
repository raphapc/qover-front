import React from 'react';
import { ReactComponent as CheckboxIcon } from '../../assets/images/checked.svg';
import Button from '../../atoms/Button';
import Heading from '../../atoms/Heading';
import Input from '../../atoms/Input';
import useInputValue from '../../hooks/useInputValue';
import { Container, ErrorMessage, InputContainer, TextButtonContainer } from './styledComponents';
import { ILoginPanel } from './types';

const LoginPanel = ({ error, onAttemptSignIn }: ILoginPanel) => {
  const username = useInputValue<string>('');
  const password = useInputValue<string>('');

  const handleClick = () => {
    onAttemptSignIn({ username: username.value, password: password.value });
  };

  const isDisabled = (): Boolean => {
    if (username.value === '' || password.value === '') return true;

    return false;
  };

  return (
    <Container>
      <Heading variant='h2' text='Welcome at Qover' />
      <InputContainer>
        <Input name='username' label='Username' type='text' {...username} variant='underlined' />
        <Input name='password' label='Password' type='password' {...password} variant='underlined' />
        <TextButtonContainer>
          <span>
            <CheckboxIcon />
            Remember me
          </span>
          <span>Forgot your password?</span>
        </TextButtonContainer>
      </InputContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <Button variant='regular' disabled={isDisabled()} onClick={handleClick}>
        Sign in to your account
      </Button>
    </Container>
  );
};

export default LoginPanel;
