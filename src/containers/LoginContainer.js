import React, { useState, useReducer } from 'react';
import LoginComponent from '../components/LoginComponent'
import * as yup from 'yup';
import apiHelper from '../apis/apiHelper';
import login from '../apis/loginApi';
import loginReducer, { initialState } from '../reducers/loginReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LOGIN_REDUCER } from '../shared/actionConstants'
import { setUserDetails, loginRequest, setErrors, resetErrors } from '../actions/loginActions';

const LoginContainer = () => {

  const dispatch = useDispatch();
  const result = useSelector(state => state.loginReducer);
  const { username, password, usernameError, passwordError, userDetails } = result;

  let schema = yup.object().shape({
    username: yup.string().email().required(),
    password: yup.string().required(),
  });


  const showError = () => {
    dispatch(resetErrors());
    schema.isValid({ username, password })
      .then(function (valid) {
        if (!valid) {
          schema.validate({ username, password }, { abortEarly: false }).catch((err) => {
            // console.log("err--------", err)
            err.inner.forEach((ele) => {
              dispatch(setErrors(ele));
            });
          });
        }
        else {

          dispatch(loginRequest({ username, password }));

        }

      })

  }

  if (userDetails.auth_token) {
    return (<Redirect to='/dashboard' />)
  }

  return (
    <LoginComponent showError={showError} dispatch={dispatch} usernameError={usernameError} passwordError={passwordError} username={username} password={password} />
  );
};

export default LoginContainer;