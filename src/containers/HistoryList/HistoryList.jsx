import React, { useEffect } from 'react';
import { useDispatch, useUrl, useMethod, useBody, useAuthType, useAuthUsername, useAuthPassword, useAuthToken, useRes, useHistory } from '../../hooks/AppProvider/AppProvider';
import HistoryItem from '../../components/HistoryItem/HistoryItem';
import styles from './HistoryList.css';

const url = useUrl();
const method = useMethod();
const body = useBody();
const authType = useAuthType();
const authUsername = useAuthUsername();
const authPassword = useAuthPassword();
const authToken = useAuthToken();
const res = useRes();
const dispatch = useDispatch();
const history = useHistory();

export function addFetchToHistory() {
  // Create a history item and update request history in localStorage
  const newHistoryItem = { 
    url: url,
    method: method,
    body: body,
    authType,
    authUsername,
    authPassword,
    authToken
  };

  let history;
  history = JSON.parse(localStorage.getItem('history'));
  if(history) history.push(newHistoryItem);
  else history = [newHistoryItem];
  localStorage.setItem('history', JSON.stringify(history));
}

const handleLoadHistoryItemClick = (index) => {
  const history = JSON.parse(localStorage.getItem('history'));
  dispatch({ type: 'SET_URL', payload: history[index].url });
  dispatch({ type: 'SET_METHOD', payload: history[index].method });
  dispatch({ type: 'SET_BODY', payload: history[index].body });
  dispatch({ type: 'SET_AUTHTYPE', payload: history[index].authType });
  dispatch({ type: 'SET_AUTHUSERNAME', payload: history[index].authUsername });
  dispatch({ type: 'SET_AUTHPASSWORD', payload: history[index].authPassword });
  dispatch({ type: 'SET_AUTHTOKEN', payload: history[index].authToken });
};

const handleClearHistory = () => {
  localStorage.removeItem('history');
  dispatch({ type: 'CLEAR_HISTORY', payload: [] });
}; 

const HistoryContainer = () => {

  const historyObj = history.map((item, index) => 
    <HistoryItem 
      key={index} 
      method={item.method} 
      url={item.url} 
      index={index} 
      onLoadHistoryItemClick={handleLoadHistoryItemClick} 
    />);

  useEffect(() => {
    const lsHistory = JSON.parse(localStorage.getItem('history'));
    lsHistory 
      ? dispatch({ type: 'SET_HISTORY', payload: lsHistory }) 
      : dispatch({ type: 'SET_HISTORY', payload: [] });
  }, [res]);
  
  return (
    <>
      <div className={styles.historyContainer}>
        <h3>History</h3>
        <hr />
        {historyObj}
        {history.length > 0 && 
          <button onClick={() => handleClearHistory}>Clear History</button> 
        }
      </div>
    </>
  );
};

export default HistoryContainer;
