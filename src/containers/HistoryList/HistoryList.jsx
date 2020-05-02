import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from '../../components/HistoryItem/HistoryItem';
import styles from './HistoryList.css';

const HistoryContainer = ({ history }) => {

  const historyObj = history.map((item, index) => <HistoryItem key={index} reqType={item.reqType} url={item.url} />);
  
  return (
    <>
      <div className={styles.historyContainer}>
        <h3>History</h3>
        <hr />
        {historyObj}
      </div>
    </>
  );
};

HistoryContainer.propTypes = {
  history: PropTypes.array.isRequired
};

export default HistoryContainer;
