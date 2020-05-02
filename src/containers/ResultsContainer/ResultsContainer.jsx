import React from 'react';
import PropTypes from 'prop-types';
import Results from '../../components/Results/Results';
import styles from './ResultsContainer.css';

const ResultsContainer = ({ res }) => {

  const resultsObj = res.map((item, index) => <Results key={index} item={item}/>);
  
  return (
    <>
      <div className={styles.resultsContainer}>
        <h3>Results</h3>
        <hr />
        {resultsObj}
      </div>
    </>
  );
};

ResultsContainer.propTypes = {
  res: PropTypes.array.isRequired
};

export default ResultsContainer;
