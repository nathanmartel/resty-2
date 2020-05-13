import { useDispatch, useUrl, useMethod, useBody, useAuthType, useAuthUsername, useAuthPassword, useAuthToken, useLSHistory } from '../../hooks/AppProvider/AppProvider';

export function useLoadHistoryItem(index) {

  const dispatch = useDispatch();
  const history = useLSHistory();

  console.log('in useLoadHistoryItem');
  dispatch({ type: 'SET_URL', payload: history[index].url });
  dispatch({ type: 'SET_METHOD', payload: history[index].method });
  dispatch({ type: 'SET_BODY', payload: history[index].body });
  dispatch({ type: 'SET_AUTHTYPE', payload: history[index].authType });
  dispatch({ type: 'SET_AUTHUSERNAME', payload: history[index].authUsername });
  dispatch({ type: 'SET_AUTHPASSWORD', payload: history[index].authPassword });
  dispatch({ type: 'SET_AUTHTOKEN', payload: history[index].authToken });
}



// Create a history item and update request history in localStorage
export function useAddFetchToHistory() {

  const history = useLSHistory();

  const url = useUrl();
  const method = useMethod();
  const body = useBody();
  const authType = useAuthType();
  const authUsername = useAuthUsername();
  const authPassword = useAuthPassword();
  const authToken = useAuthToken();

  const newHistoryItem = { 
    url,
    method,
    body,
    authType,
    authUsername,
    authPassword,
    authToken
  };

  console.log('in useAddFetchToHistory');
  if(history) {
    history.push(newHistoryItem);
    localStorage.setItem('history', JSON.stringify(history));
  } else {
    localStorage.setItem('history', JSON.stringify([newHistoryItem]));
  }
}

export default useLoadHistoryItem;
