import React, { useState, useReducer } from 'react';
import LoginComponent from '../components/LoginComponent'
import * as yup from 'yup';
import apiHelper from '../apis/apiHelper';
import login from '../apis/loginApi';
import loginReducer, { initialState } from '../reducers/loginReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LOGIN_REDUCER } from '../shared/actionConstants'

const LoginContainer = () => {

  const dispatch = useDispatch();
  const result = useSelector(state => state);
  const { username, password, usernameError, passwordError, userDetails } = result;

  let schema = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().required(),
  });
  const showError = () => {
    dispatch({ type: LOGIN_REDUCER.RESET_ERRORS });
    schema.validate({ username, password }, { abortEarly: false })
      .then(() => {
        apiHelper('post', 'https://api.taiga.io/api/v1/auth', { username, password, type: "normal" })
          // { username, password, type: 'normal' })
          .then(({ data }) => {
            dispatch({ type: LOGIN_REDUCER.SET_USER_DETAILS, value: data });
            // return <Redirect to='/dashboard/'  />
          })
      })
      .catch((err) => {
        err.inner.forEach((ele) => {
          dispatch({ type: `SET_${ele.path.toUpperCase()}_ERROR`, value: ele.message });
        });
      });
    console.log(userDetails, "sdadaklsnfnl");
  }

  if (userDetails.auth_token) {
    console.log('in userDetails')
    return (<Redirect to='/dashboard' />)
  }

  return (
    <LoginComponent showError={showError} dispatch={dispatch} usernameError={usernameError} passwordError={passwordError} username={username} password={password} />
  );
};

export default LoginContainer;