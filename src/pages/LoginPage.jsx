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
    <div>
      <h1>Login page</h1>
      <Form
        title={'Войти'}
        handleClick={handleLogin}
      />
      <Link to="/register">Register Page</Link>
    </div>
  )
}
