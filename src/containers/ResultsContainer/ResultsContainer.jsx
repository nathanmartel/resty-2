import React from 'react';
import Results from '../../components/Results/Results';
import { useRes, useLoading, useError } from '../../hooks/AppProvider/AppProvider';
import styles from './ResultsContainer.css';


const ResultsContainer = () => {

  const res = useRes();
  const loading = useLoading();
  const error = useError();

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

export default ResultsContainer;
