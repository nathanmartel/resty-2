import React, { useState, useEffect } from 'react';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import RequestForm from '../../components/RequestForm/RequestForm';
import HistoryList from '../HistoryList/HistoryList';
import styles from './Main.css';

const Main = () => {
  const [url, setUrl] = useState('http://jsonplaceholder.typicode.com/posts');
  const [method, setMethod] = useState('GET');
  const [body, setBody] = useState('');
  const [authType, setAuthType] = useState('');
  const [authUsername, setAuthUsername] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authToken, setAuthToken] = useState('');
  const [authUsernamePlaceholder, setAuthUsernamePlaceholder] = useState('Username');
  const [authPasswordPlaceholder, setAuthPasswordPlaceholder] = useState('Password');
  const [authTokenPlaceholder, setAuthTokenPlaceholder] = useState('Bearer Token');
  const [history, setHistory] = useState([]);
  const [res, setRes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleUrlChange = (e) => setUrl(e.target.value);
  const handleMethodChange = (e) => setMethod(e.target.value);
  const handleBodyChange = (e) => setBody(e.target.value);
  const handleAuthTypeChange = (e) => setAuthType(e.target.value);
  const handleAuthUsernameChange = (e) => setAuthUsername(e.target.value);
  const handleAuthPasswordChange = (e) => setAuthPassword(e.target.value);
  const handleAuthTokenChange = (e) => setAuthToken(e.target.value);

  function fetchRequest() {
    // Setup request
    const reqInit = {
      method: method,
    };

    // Add body if requested
    if(body) reqInit.body = JSON.parse(body);
    
    // Add headers if requested
    if(authType === 'basic') {
      const encodedData = btoa(`${authUsername} ${authPassword}`);  
      const myHeaders = new Headers;
      myHeaders.append('Authorization', `Basic ${encodedData}`);
      reqInit.headers = myHeaders; 
    }
    if(authType === 'bearerToken') {
      const myHeaders = new Headers;
      myHeaders.append('Authorization', `Bearer ${authToken}`);
      reqInit.headers = myHeaders; 
    }

    // Send that request!
    fetch(url, reqInit)
      .then(res => { 
        if(!res.ok) throw Error(res.statusText);
        else return res;
      })
      .then(res => res.json())
      // Make sure response is in array form
      .then(json => Array.isArray(json) ? setRes(json) : setRes([json]))
      .catch(err => { setError(`${err}`); });
  }

  function addFetchToHistory() {
    // Create a history item and update request history in localStorage
    const newHistoryItem = { 
      url: url,
      method: method,
      body: body,
      authType,
      authUsername,
      authPassword,
      authToken
    };
  
    let history;
    history = JSON.parse(localStorage.getItem('history'));
    if(history) history.push(newHistoryItem);
    else history = [newHistoryItem];
    localStorage.setItem('history', JSON.stringify(history));
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    fetchRequest();
    setLoading(false);
    addFetchToHistory();
  };

  const handleLoadHistoryItemClick = (index) => {
    const history = JSON.parse(localStorage.getItem('history'));
    setUrl(history[index].url);
    setMethod(history[index].method);
    setBody(history[index].body);
    setAuthType(history[index].authType);
    setAuthUsername(history[index].authUsername);
    setAuthPassword(history[index].authPassword);
    setAuthToken(history[index].authToken);
  };

  const handleClearHistory = () => {
    localStorage.removeItem('history');
    setHistory([]);
  }; 

  useEffect(() => {
    console.log('in UseEffect');
    const lsHistory = JSON.parse(localStorage.getItem('history'));
    lsHistory ? setHistory(lsHistory) : setHistory([]);
  }, [res]);


  return (
    <>
      <main>
        <HistoryList 
          history={history} 
          onLoadHistoryItemClick={handleLoadHistoryItemClick} 
          onClearHistoryClick={handleClearHistory} 
        />
        <section>
          <RequestForm 
            url={url} 
            method={method} 
            body={body}
            onUrlChange={handleUrlChange}
            onMethodChange={handleMethodChange}
            onBodyChange={handleBodyChange}
            authType={authType}
            authUsername={authUsername}
            authPassword={authPassword}
            authToken={authToken}
            authUsernamePlaceholder={authUsernamePlaceholder}
            authPasswordPlaceholder={authPasswordPlaceholder}
            authTokenPlaceholder={authTokenPlaceholder}
            onAuthTypeChange={handleAuthTypeChange}
            onAuthUsernameChange={handleAuthUsernameChange}
            onAuthPasswordChange={handleAuthPasswordChange}
            onAuthTokenChange={handleAuthTokenChange}
            onSubmit={handleSubmit}  
          />
          <ResultsContainer 
            res={res} 
            loading={loading} 
            error={error} 
          />
        </section>
      </main>
    </>
  );
};

export default Main;
