import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

const AppContext = createContext;

const initialState = {
  url: 'http://jsonplaceholder.typicode.com/posts',
  method: 'GET',
  body: '',
  authType: '',
  authUsername: '',
  authPassword: '',
  authToken: '',
  authUsernamePlaceholder: 'Username',
  authPasswordPlaceholder: 'Password',
  authTokenPlaceholder: 'Bearer Token',
  history: [],
  res: [],
  loading: false,
  error: '',
};

function reducer(state, action) {
  switch(action.type) {
    // case 'increment':
    //   return { count: state.count + 1 };
    // case 'decrement':
    //   return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

// Elsewhere, as containers / components ... 
// function Counter({ initialState }) {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <>
//       Count: {state.count}
//       <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//     </>
//   );
// }

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node
};
