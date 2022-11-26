const initialState = {
  singUp: false,
  singIn: false,
  error: null,
  token: localStorage.getItem('token'),
};

export default function application(state = initialState, action) {
 
  switch (action.type) {
    case 'application/singUp/peading':
      return {
        ...state,
        singUp: true,
        error: null,
        token: null,
      };
    case 'application/singUp/fulfilled':
      return {
        ...state,
        singUp: false,
        error: null,
        token: null,
      };
    case 'application/singUp/rejected':
      return {
        ...state,
        singUp: true,
        error: action.error,
        token: null,
      };
    case 'application/signIn/peading':
      return {
        ...state,
        singIn: true,
        error: null,
        token: null,
      };
    case 'application/signIn/fulfilled':
      return {
        ...state,
        singIn: false,
        error: null,
        token: action.payload.token,
      };
    case 'application/signIn/rejected':
      return {
        ...state,
        singIn: false,
        error: action.error,
        token: null,
      };
    default:
      return state;
  }
}

export function createUser(login, password) {
  return async dispatch => {
    dispatch({ type: 'application/singUp/peading' });

    const res = await fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify({ login, password }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const json = await res.json();

    if (json.error) {
      dispatch({ type: 'application/singUp/rejected', error: json.error });
    } else {
      dispatch({ type: 'application/singUp/fulfilled', error: json });
    }
  };
}

export function autzLogin(login, password) {
  return async dispatch => {
    dispatch({ type: 'application/signIn/peading' });

    const res = await fetch('http://localhost:3000/login', {
      method: 'POST',
      body: JSON.stringify({ login, password }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const json = await res.json();

    if (json.error) {
      dispatch({ type: 'application/signIn/rejected', error: json.error });
    } else {
      dispatch({ type: 'application/signIn/fulfilled', payload: json });
      console.log(json);
      localStorage.setItem('token', json.token)
    }
  };
}
