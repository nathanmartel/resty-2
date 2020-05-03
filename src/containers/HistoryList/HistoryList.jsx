import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from '../../components/HistoryItem/HistoryItem';
import styles from './HistoryList.css';

const HistoryContainer = ({ history, onLoadHistoryItemClick, onClearHistoryClick }) => {

  const historyObj = history.map((item, index) => 
    <HistoryItem 
      key={index} 
      method={item.method} 
      url={item.url} 
      index={index} 
      onLoadHistoryItemClick={onLoadHistoryItemClick} 
    />);

  return (
    <>
      <div className={styles.historyContainer}>
        <h3>History</h3>
        <hr />
        {historyObj}
        <button onClick={onClearHistoryClick}>Clear History</button>
      </div>
    </>
  );
};

HistoryContainer.propTypes = {
  history: PropTypes.array.isRequired,
  onLoadHistoryItemClick: PropTypes.func.isRequired,
  onClearHistoryClick: PropTypes.func.isRequired
};

export default HistoryContainer;
