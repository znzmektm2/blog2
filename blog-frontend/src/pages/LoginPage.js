import React from 'react';
import AuthTemplate from './../components/auth/AuthTemplate';
import LoginForm from './../containers/auth/LoginForm';
import { Helmet } from 'react-helmet-async';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <Helmet>
        <title>로그인 - REACTERS</title>
      </Helmet>
      <LoginForm type="login" />
    </AuthTemplate>
  );
};

export default LoginPage;
