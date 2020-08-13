import React, { useState } from 'react';
import LoginComponent from '../components/LoginComponent'

const LoginContainer = () => {
  const [userName, setUserName] = useState('vikram');
  const [password, setPassword] = useState('abc123');

  const logValues = () => {
    console.log(userName);
    console.log(password);
  }
  return (
    <LoginComponent userName={userName} password={password} setUserName={setUserName} setPassword={setPassword} logValues={logValues} />
  );
};

export default LoginContainer;