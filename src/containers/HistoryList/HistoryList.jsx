import React from 'react';
import HistoryItem from '../../components/HistoryItem/HistoryItem';
import { useHistory, useDispatch } from '../../hooks/AppProvider/AppProvider';
import styles from './HistoryList.css';

const HistoryContainer = () => {

  const dispatch = useDispatch();
  const history = useHistory();

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

  const historyObj = history.map((item, index) => 
    <HistoryItem 
      key={index} 
      method={item.method} 
      url={item.url} 
      index={index} 
      onLoadHistoryItemClick={handleLoadHistoryItemClick} 
    />);

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
