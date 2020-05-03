import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ method, url, index, onLoadHistoryItemClick }) => {
  return (
    <>
      <p>{method} {url}</p>
      <button onClick={() => onLoadHistoryItemClick(index)}>Load</button>
      <hr />
    </>
  );
};

HistoryItem.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onLoadHistoryItemClick: PropTypes.func.isRequired
};

export default HistoryItem;
