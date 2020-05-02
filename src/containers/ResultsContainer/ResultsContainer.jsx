import React from 'react';
import PropTypes from 'prop-types';
import Results from '../../components/Results/Results';

const ResultsContainer = ({ res }) => {

  const resultsObj = res.map((item, index) => <Results key={index} item={item}/>);

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
