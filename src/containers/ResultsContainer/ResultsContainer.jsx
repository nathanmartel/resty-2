import React from 'react';
import PropTypes from 'prop-types';
// import Results from '../../components/Results/Results';
import ReactJson from 'react-json-view';

const ResultsContainer = ({ res }) => {

  // const resultsObj = res.map((item, index) => <Results key={index} item={item}/>);
  // Use prettier results from library instead:
  const resultsObj = res.map((item, index) => <ReactJson key={index} src={item} name={false} displayDataTypes={false} />);

  return (
    <>
      {resultsObj}
    </>
  );
};

ResultsContainer.propTypes = {
  res: PropTypes.array.isRequired
};

export default ResultsContainer;
