import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { autzLogin } from '../../redux/features/application';

export default function SignIn() {
  const dispatch = useDispatch();
  const signin = useSelector(state => state.signin);
  const error = useSelector(state => state.application.error);

  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);

  const handleChangeLogin = e => {
    setLogin(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };
  const handleReg = e => {
    dispatch(autzLogin(login, password));
  };
  return (
    <div>
      {error}
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
      <button disabled={signin} onClick={handleReg}>
        Autz
      </button>
    </div>
  );
}
