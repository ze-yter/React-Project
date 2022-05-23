import React, { useState } from 'react'

export default function Form({title, handleClick}) {
  let [email, setEmail] = useState('');
  let [pass, setPass] = useState('');

  return (
    <div className='form-objects'>
      <div className='profile-field'>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='example@gmail.com'
        className='type-2 center-flex'
      />
      </div>
      <div className='profile-field'>
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder='password'
        className='type-2 center-flex'
      />
      </div>
      <button className='enter-button center-flex' onClick={() => handleClick(email, pass)}>
        <span>OPEN BUBBLESTORE</span>
      </button>
    </div>
  )
}