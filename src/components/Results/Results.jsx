import React from 'react';
// import PropTypes from 'prop-types';

const Results = ({ item }) => {
  return (
    <>
      <pre>
        { JSON.stringify(item) }
      </pre>
    </>
  );
};

// Results.propTypes = {
//   item: PropTypes.array.isRequired
// };

export default Results;
