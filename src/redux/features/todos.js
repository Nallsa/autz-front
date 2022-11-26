const initialState = {
  loading: false,
  items: [],
  error: null,
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'application/fatchTodos/peading':
      return {
        ...state,
        loading: true,
      };
    case 'application/fatchTodos/fulfilled':
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case 'application/fatchTodos/rejected':
      return {
        ...state,
        loading: false,
        error: action.error,
        items: [],
      };

    default:
      return state;
  }
}

export function fetchTodos() {
  return async (dispatch, getState) => {
    const state = getState();
    dispatch({ type: 'application/fatchTodos/peading' });
    

    try {
      const res = await fetch('http://localhost:3000/todos', {
        headers: {
          Authorization: `Bearer ${state.application.token}`,
        },
      });
      const json = await res.json();

      if (json.error) {
        dispatch({
          type: 'application/fatchTodos/rejected',
          error: 'Произошла ошибка на сервере',
        });
      } else {
        dispatch({ type: 'application/fatchTodos/fulfilled', payload: json });
      }
    } catch (e) {
      dispatch({
        type: 'application/fatchTodos/rejected',
        error: e.toString(),
      });
    }
  };
}
