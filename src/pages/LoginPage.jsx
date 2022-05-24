import React, { useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Form from '../components/Form';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from '../store/slices/userSlice';


const storageName = 'userData';
export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || '/';

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        localStorage.setItem(storageName, JSON.stringify({
          email: user.email,
          id: user.uid,
          token: user.accessToken
        }))
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken
        }))
        navigate(fromPage);
      })
      .catch(console.error)
  }

  return (
    <div className='register-login'>
      <h1 className='center-objects margin-bot'>ВОЙТИ В ПРОФИЛЬ</h1>
      <Form
        handleClick={handleLogin}
      />
      <Link to="/register" className='center-objects'><h3 className='change-link'>Register Page</h3></Link>
      
      <img width={60} height={60} src="/images/logo.png" alt="Logo" className="company-logo button center-logo" />
    </div>
  )
}
