import React from 'react';
import { useLSHistory } from '../../hooks/AppProvider/AppProvider';
import { useLoadHistoryItem } from '../../hooks/History/History';
import HistoryItem from '../../components/HistoryItem/HistoryItem';
import styles from './HistoryList.css';

const HistoryContainer = () => {

  const history = useLSHistory();

  const handleClearHistory = () => {
    localStorage.setItem('history', JSON.stringify([]));
  }; 

  const historyObj = history.map((item, index) => 
    <HistoryItem 
      key={index} 
      method={item.method} 
      url={item.url} 
      index={index} 
      onLoadHistoryItemClick={() => useLoadHistoryItem(index)} 
    />);
  
  return (
    <>
      <div className={styles.historyContainer}>
        <h3>History</h3>
        <hr />
        {historyObj}
        {history.length > 0 && 
          <button onClick={() => handleClearHistory()}>Clear History</button> 
        }
      </div>
    </>
  );
};

export default HistoryContainer;
