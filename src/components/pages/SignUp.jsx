import React from 'react';
import { useState } from 'react';

export default function SignUp() {
  const [login, seLogin] = useState(null);
  const [password, sepassword] = useState(null);

  const handleChangeLogin = e => {
    seLogin(e.target.value);
  };
  const handleChangePassword = e => {
    sepassword(e.target.value);
  };
  const handleReg = e => {};
  return (
    <div>
      <input
        type='text'
        placeholder='type login'
        value={login}
        onChange={handleChangeLogin}
      />
      <input
        type='password'
        placeholder='type password'
        value={password}
        onChange={handleChangePassword}
      />
      <button onClick={handleReg}>Reg</button>
    </div>
  );
}
