import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../redux/features/application';

export default function SignUp() {
  const dispatch = useDispatch();
  const singUp = useSelector(state => state.singUp);
  const error = useSelector(state => state.application.error);

  const [login, seLogin] = useState(null);
  const [password, sepassword] = useState(null);

  const handleChangeLogin = e => {
    seLogin(e.target.value);
  };
  const handleChangePassword = e => {
    sepassword(e.target.value);
  };
  const handleReg = e => {
    dispatch(createUser(login, password));
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
      <button disabled={singUp} onClick={handleReg}>
        Reg
      </button>
    </div>
  );
}
