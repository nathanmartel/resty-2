import React, { useState, useEffect } from 'react';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import RequestForm from '../../components/RequestForm/RequestForm';
import HistoryList from '../HistoryList/HistoryList';
import styles from './Main.css';

const Main = () => {
  const [url, setUrl] = useState('http://jsonplaceholder.typicode.com/posts/1');
  const [reqType, setReqType] = useState('GET');
  const [reqBody, setReqBody] = useState('');
  const [res, setRes] = useState([]);
  const [history, setHistory] = useState([]);

  const handleUrlChange = (e) => setUrl(e.target.value);
  const handleReqTypeChange = (e) => setReqType(e.target.value);
  const handleReqBodyChange = (e) => setReqBody(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Setup request
    const reqInit = {
      method: reqType,
      body: reqBody,
    };
    // Cannot submit a body on GET or DELETE requests, so remove key
    if(reqType === 'GET' || reqType === 'DELETE') delete reqInit.body;
    fetch(url, reqInit)
      .then(res => res.json())
      .then(json => Array.isArray(json) ? setRes(json) : setRes([json])); 
    
    // Create a history item and update request history
    const newHistoryItem = { 
      url: url,
      reqType: reqType,
      reqBody: reqBody
    };
    setHistory(history => [...history, newHistoryItem]);
  };

  return (
    <>
      <main>
        <HistoryList history={history} />
        <section>
          <RequestForm 
            url={url} 
            reqType={reqType} 
            reqBody={reqBody}
            onUrlChange={handleUrlChange}
            onReqTypeChange={handleReqTypeChange}
            onReqBodyChange={handleReqBodyChange}
            onSubmit={handleSubmit}  />
          <ResultsContainer res={res} test='test' />
        </section>
      </main>
    </>
  );
};

export default Main;
