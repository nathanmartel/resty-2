import React from 'react';
import Header from '../Header/Header';
import FormContainer from '../../containers/FormContainer/FormContainer';
import HistoryList from '../../containers/HistoryList/HistoryList';
import ResultsContainer from '../../containers/ResultsContainer/ResultsContainer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HistoryList />
        <section>
          <FormContainer />
          <ResultsContainer />
        </section>
      </main>
    </>
  );
}
