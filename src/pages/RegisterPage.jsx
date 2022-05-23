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
    <div className='register-login'>
      <h1 className='center-objects margin-bot'>ЗАРЕГИСТРИРОВАТЬСЯ</h1>
      <Form
        handleClick={handleLogin}
      />
      <Link to="/login" className='center-objects'><h3 className='change-link'>Login Page</h3></Link>
      <img width={60} height={60} src="/images/logo.png" alt="Logo" className="company-logo button center-logo" />
    </div>
  )
}
