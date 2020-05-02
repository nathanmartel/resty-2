import React from 'react';
import ReactJson from 'react-json-view';
import PropTypes from 'prop-types';

const Results = ({ item }) => {
  return (
    <>
      <ReactJson src={item} name={false} displayDataTypes={false} />);
      {/* <pre>
        { JSON.stringify(item) }
      </pre> */}
    </>
  );
};

Results.propTypes = {
  item: PropTypes.object.isRequired
};

export default Results;
