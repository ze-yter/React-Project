import React, { useState } from 'react'

export default function Form({title, handleClick}) {
  let [email, setEmail] = useState('');
  let [pass, setPass] = useState('');

  return (
    <div>
      <p>Почта</p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='biba.boba@gmail.com'
      />
      <p>Пароль</p>
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder='password'
      />
      <button onClick={() => handleClick(email, pass)}>
        {title}
      </button>
    </div>
  )
}