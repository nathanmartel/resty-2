import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const AppContext = createContext();

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
  res: [],
  loading: false,
  error: '',
};

export function reducer(state, action) {
  switch(action.type) {
    case 'SET_URL':
      return { ...state, url: action.payload };
    case 'SET_METHOD':
      return { ...state, method: action.payload };
    case 'SET_BODY':
      return { ...state, body: action.payload };
    case 'SET_AUTHTYPE':
      return { ...state, authType: action.payload };
    case 'SET_AUTHUSERNAME':
      return { ...state, authUsername: action.payload };
    case 'SET_AUTHPASSWORD':
      return { ...state, authPassword: action.payload };
    case 'SET_AUTHTOKEN':
      return { ...state, authToken: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_RES':
      return { ...state, res: action.payload };
    
    default:
      throw new Error();
  }
}


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

export const useState = () => {
  const { state } = useContext(AppContext);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(AppContext);
  return dispatch;
};

export const useUrl = () => {
  const { url } = useState();
  return url;
};

export const useMethod = () => {
  const { method } = useState();
  return method;
};

export const useBody = () => {
  const { body } = useState();
  return body;
};

export const useAuthType = () => {
  const { authType } = useState();
  return authType;
};

export const useAuthUsername = () => {
  const { authUsername } = useState();
  return authUsername;
};

export const useAuthPassword = () => {
  const { authPassword } = useState();
  return authPassword;
};

export const useAuthToken = () => {
  const { authToken } = useState();
  return authToken;
};

export const useAuthUsernamePlaceholder = () => {
  const { authUsernamePlaceholder } = useState();
  return authUsernamePlaceholder;
};

export const useAuthPasswordPlaceholder = () => {
  const { authPasswordPlaceholder } = useState();
  return authPasswordPlaceholder;
};

export const useAuthTokenPlaceholder = () => {
  const { authTokenPlaceholder } = useState();
  return authTokenPlaceholder;
};

export const useRes = () => {
  const { res } = useState();
  return res;
};

export const useLoading = () => {
  const { loading } = useState();
  return loading;
};

export const useError = () => {
  const { error } = useState();
  return error;
};

export const useLSHistory = () => {
  const history = JSON.parse(localStorage.getItem('history'));
  return history;
};
