import React from 'react';
import PropTypes from 'prop-types';
import Results from '../../components/Results/Results';
import styles from './ResultsContainer.css';

const ResultsContainer = ({ res, loading, error }) => {

  const resultsObj = res.map((item, index) => <Results key={index} item={item}/>);
  
  return (
    <>
      <div className={styles.resultsContainer}>
        <h3>Results</h3>
        <hr />
        { loading ? (
          <p>Loading...</p> 
        ) : (
          <>{resultsObj}</>
        )}
        { error && <p className={styles.error}>{error}</p> }
      </div>
    </>
  );
};

ResultsContainer.propTypes = {
  res: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired
};

export default ResultsContainer;
