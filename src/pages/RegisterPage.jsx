import React, { useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Form from '../components/Form';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {setUser} from '../store/slices/userSlice';

const storageName = 'userData';
export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) =>{
        localStorage.setItem(storageName, JSON.stringify({
          email: user.email,
          token: user.accessToken,
          id: user.uid
        }))
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken
        }))
        navigate('/');
      })
      .catch(console.error)
  }

  return (
    <div>
      <h1>Register page</h1>
      <Form
        title={'Зарегистрироваться'}
        handleClick={handleLogin}
      />
      <Link to="/login">Login Page</Link>
    </div>
  )
}
