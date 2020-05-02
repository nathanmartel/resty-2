import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ reqType, url }) => {
  return (
    <>
      <p>{reqType} {url}</p>
      <hr />
    </>
  );
};

HistoryItem.propTypes = {
  reqType: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default HistoryItem;
